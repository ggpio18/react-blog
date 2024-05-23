import React from 'react'
// import Navigation from '../../../../partials/Navigation'
// import Header from '../../../../partials/Header'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
// import postTable from './PostTable'
// import ModalAddpost from './ModalAddpost'
import useQueryData from '../../../../custom-hook/useQueryData'
import { setIsAdd } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'
// import ModalError from '../../../../partials/modals/ModalError'
// import Toast from '../../../../partials/Toast'
import Navigation from '../../ui/partials/Navigation'
import Header from '../../ui/partials/Header'
import PostTable from './PostTable'
import ModalAddPost from './ModalAddPost'
import ModalError from '../../ui/partials/modals/ModalError'
import Toast from '../../ui/partials/Toast'

const Post = () => {
    const {store, dispatch} = React.useContext(StoreContext)
    const [isSearch, setIsSeach] = React.useState(false);
    const [keyword, setKeyword] = React.useState('');
    const [itemEdit, setItemEdit] = React.useState(null);

    const {
        isLoading,
        isFetching,
        error,
        data: post,
      } = useQueryData(
        isSearch ? "/v1/post/search" : "/v1/post", // endpoint
        isSearch ? "post" : "get", // method
        "post", // key
        {
            searchValue: keyword
        }
      );

      //addbtn
      const handleAdd = () => {
        dispatch(setIsAdd(true))
        setItemEdit(null)
      }

  return (
    <>

      <section className='flex overflow-x-hidden bg-primary'>
        <Navigation/>
        <main className='w-[calc(100%-250px)]'>
            <Header/>

        <div className='flex relative'>
            <div className={`main-wrapper transition-all px-4 py-3 max-h-[calc(100vh - 65px)] w-full `}>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl mb-4'>post Database</h1>
                    {/* <Searchbar setIsSeach={setIsSeach} setKeyword={setKeyword}/> */}
                </div>
            

                <div className='tab flex justify-between items-center mt-8 border-b border-line mb-8 '>
                   <h1>Search</h1>

                    <button className='btn btn--accent' onClick={handleAdd}>
                        <FiPlus/> New
                    </button>
                </div>
                    {/* table here */}
                    <PostTable  isLoading={isLoading} post={post} isFetching={isFetching} setItemEdit={setItemEdit}/>
            </div>
             {/* database info */}
        </div>

        </main>

        {store.isAdd && <ModalAddPost  itemEdit={itemEdit}/>}
        {store.success && <Toast/>}
        {store.error && <ModalError position="center"/>}
    </section>

    </>
  )
}

export default Post
