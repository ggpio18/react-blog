import React from 'react'

import { FiPlus } from 'react-icons/fi'
import useQueryData from '../../../../custom-hook/useQueryData'
import { setIsAdd } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'
import ModalAddCategory from './ModalAddCategory'

import CategoryTable from './CategoryTable'
import Navigation from '../../ui/partials/Navigation'
import Header from '../../ui/partials/Header'
import ModalError from '../../ui/partials/modals/ModalError'
import Toast from '../../ui/partials/Toast'
import Searchbar from '../../ui/partials/Searchbar'

const Category = () => {
    const {store, dispatch} = React.useContext(StoreContext)
    const [isSearch, setIsSearch] = React.useState(false)
    const [keyword , setKeyword] = React.useState('');
    const [itemEdit , setItemEdit] = React.useState('');

    const {
        isLoading,
        isFetching,
        error,
        data: category,
      } = useQueryData (
       "/v1/category", // endpoint
       "get", // method
       "category", // key      
      );


      const handleAdd = () => {
        dispatch(setIsAdd(true));
        setItemEdit(null)
    }
  return (
    <section className='flex overflow-hidden'>
    <Navigation menu="category"/>
    <main className='w-[calc(100%-250px)] overflow-x-hidden'>
        <Header/>

    <div className='flex '>
        <div className={`main-wrapper transition-all px-4 py-3  sticky top-0 w-full`}>
            <div className='flex justify-between items-center'>
                <h1>Category</h1>
                <Searchbar setIsSeach={setIsSearch} setKeyword={setKeyword}/>
            </div>
        
            <div className='tab flex justify-between items-center mt-8 border-b border-line mb-8 '>
                <h2>Seacrh</h2>
                <button className='btn btn--accent' onClick={handleAdd} >
                    <FiPlus/> New
                </button>
            </div>
            <CategoryTable isLoading={isLoading} category={category} isFetching={isFetching} setItemEdit={setItemEdit}/>
        </div>
    </div>
    </main>

    {store.isAdd && <ModalAddCategory  itemEdit={itemEdit}/>}

    {store.error && <ModalError position="center"/>}
    {store.success && <Toast/>}
</section>
  )
}

export default Category