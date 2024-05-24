import React from 'react'
// import ModalWrapper from '../../../../partials/modals/ModalWrapper'
import { LiaTimesSolid } from 'react-icons/lia'
import { Formik, Form } from 'formik'
import { InputFileUpload, InputText, InputTextArea } from '../../../../helpers/FormInputs'
// import SpinnerButton from '../../../../partials/spinners/SpinnerButton'
import { setError, setIsAdd, setMessage, setSuccess } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'
import * as Yup from 'yup'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryData } from '../../../../helpers/queryData'
import useUploadPhoto from '../../../../custom-hook/useUploadPhoto'
import { devBaseImgUrl } from '../../../../helpers/functions-general'
import SpinnerButton from '../../ui/partials/spinners/SpinnerButton'
import ModalWrapper from '../../ui/partials/modals/ModalWrapper'
// import ModalWrapper from '../../ui/partials/modals/ModalWrapper'

const ModalAddPost = ({itemEdit, position}) => {
    const {store, dispatch} = React.useContext(StoreContext);
    const handleClose = () => dispatch(setIsAdd(false));

    //image
    const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
        `/v1/upload/photo`,
        dispatch
      );

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (values) =>
        queryData(
            itemEdit ? `/v1/post/${itemEdit.post_aid}` :`/v1/post`,
            itemEdit ? "put" : "post",
            values
        ),
   
        onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["post"] });
        if (data.success) {
            dispatch(setIsAdd(false));
            dispatch(setSuccess(true));
            dispatch(setMessage(`Successfuly updated.`));
        } 
        else {
            dispatch(setError(true))
            dispatch(setMessage(data.error));
        }
        },
    });

    const initVal ={
        post_title: itemEdit ? itemEdit.post_title : "",
        post_image: itemEdit ? itemEdit.post_image : "",
        post_author: itemEdit ? itemEdit.post_author : "",
        post_category: itemEdit ? itemEdit.post_category : "",
        post_article: itemEdit ? itemEdit.post_article : "",
        post_publish_date: itemEdit ? itemEdit.post_publish_date: "",

    }

    const yupSchema = Yup.object({
        post_title: Yup.string().required("Required g"),
        post_author: Yup.string().required("Required g"),
        post_category: Yup.string().required("Required g"),
        post_article: Yup.string().required("Required g"),
        post_publish_date: Yup.string().required("Required g"),
    })

  return (
    <div>
      <ModalWrapper position={position}>
      <div className="main-modal w-[900px] max-h-[calc(100vh-100px)] bg-secondary text-content overflow-y-scroll">
                <div className="modal-header p-4 relative">
                    <h2>New data</h2>
                    <button className='absolute top-[25px] right-4' onClick={handleClose}><LiaTimesSolid/></button>
                </div>
                <div className="modal-body p-4 ">
                    <Formik
                        initialValues={initVal}
                        validationSchema={yupSchema}
                        // image
                        onSubmit={async (values) => {
                            uploadPhoto()
                            mutation.mutate({...values, 
                                post_image:
                                (itemEdit && itemEdit.post_image === "") || photo
                                  ? photo === null
                                    ? itemEdit.post_image
                                    : photo.name
                                  : values.post_image,})
                          }}
                    >
                        {(props) => {
                            return (
                            <Form  className='flex flex-col '>
                        <div className='grow overflow-y-auto'>
                                {/* new */}

                                <div className="input-wrap">
                                    {/* drag and drop */}
                                    {photo || (itemEdit && itemEdit.post_image !== "") ? (
                                    <img
                                    src={
                                    photo
                                    ? URL.createObjectURL(photo) // preview
                                    : itemEdit.post_image // check db
                                    ? devBaseImgUrl + "/" + itemEdit.post_image
                                    : null
                                    }
                                    alt="Photo"
                                    className="rounded-tr-md rounded-tl-md  size-[200px] w-full object-cover object-center m-auto"
                                    />
                                    ) : (
                                    <span className="min-h-20 flex items-center justify-center">
                                    <span className="text-accent mr-1">Drag & Drop</span>{" "}
                                    photo here or{" "}
                                    <span className="text-accent ml-1">Browse</span>
                                    </span>
                                    )}

                                    {(photo !== null ||
                                    (itemEdit && itemEdit.post_image !== "")) && (
                                    <span className=" w-full h-auto min-h-10 flex items-center justify-center">
                                    <span className="text-accent mr-1">Drag & Drop</span>{" "}
                                    photo here or{" "}
                                    <span className="text-accent ml-1">Browse</span>
                                    </span>
                                    )}

                                    {/* <FaUpload className="opacity-100 duration-200 group-hover:opacity-100 fill-dark/70 absolute top-0 right-0 bottom-0 left-0 min-w-[1.2rem] min-h-[1.2rem] max-w-[1.2rem] max-h-[1.2rem] m-auto cursor-pointer" /> */}
                                    <InputFileUpload
                                    label="Photo"
                                    name="photo"
                                    type="file"
                                    id="myFile"
                                    accept="image/*"
                                    title="Upload photo"
                                    onChange={(e) => handleChangePhoto(e)}
                                    onDrop={(e) => handleChangePhoto(e)}
                                    className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-[100px]  "
                                    />

                            </div>
                                <div className="input-wrap">
                            <InputText
                                label="Title"
                                type="text"
                                name="post_title"
                            />
                        </div>
                            <div className='grid grid-cols-[1fr_2fr] gap-10'>
                                <div className='left'>
                                
                                          

                        {/* <div className="input-wrap">
                        <InputText
                                label="Image"
                                type="text"
                                name="post_image"
                            />
                        </div> */}

                        <div className="input-wrap">
                        <InputText
                                label="author"
                                type="text"
                                name="post_author"
                            />
                        </div>

                        <div className="input-wrap">
                        <InputText
                                label="Category"
                                type="text"
                                name="post_category"
                            />
                        </div>

                        

                        <div className="input-wrap">
                        <InputText
                                label="Published Date"
                                type="date"
                                name="post_publish_date"
                            />
                        </div>
                                </div>


                                <div className='right'>

                                <div className="input-wrap">
                                    <InputTextArea
                                        label="Article"
                                        type="text"
                                        name="post_article"
                                        className='h-[23rem] resize-none'
                                    />
                                </div>
                                </div>
                            </div>


                      

                        </div>

                        <div className='form-action max-w-[400px] ml-auto w-full'>
                            <button className='btn btn-form btn--accent' type="submit"> {mutation.isPending ? <SpinnerButton/> : "Add"}</button>
                            <button className='btn btn-form btn--cancel' type="button" onClick={handleClose} >Cancel</button>
                        </div>
                    </Form>)}}
                    
                    </Formik>
                </div>
        </div>
    </ModalWrapper>
    </div>
  )
}

export default ModalAddPost
