import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCollection, addCollection, deleteCollection } from '../../Redux/collectionsSlice';
import './Collections.css'
import Card from '../Card/Card';
import EmptyCard from '../Card/EmptyCard';

const Collections = () => {
    const dispatch = useDispatch()
    const {collections} = useSelector(selectCollection)


  return (
    <div className={collections.length <= 3 ? 'collections-centered' : 'collections'} >
        {
            collections.map((item, index) => {
                return (
                        item.status === 'success' ? (
                            <Card key={index} collectionIndex={index} data={item}/>
                        ) : (
                            <EmptyCard collectionIndex={index} key={index}/>
                        )
                )
            })
        }

        <div className="card-add" onClick={() => dispatch(addCollection())}>
            ADD
        </div>
    </div>
  )
}

export default Collections