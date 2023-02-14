import React, { useState } from 'react'

import '../../ComponentCss/ItemList.css'
import EditTable from './EditTable'
import Modal from './Modal'

import { returnText } from '../TextFunctions'
import Item from './Item'

function ItemList({items, edit=false, action}) {
    const itemKeys = Object.keys(items)
    const [selectedItem, setSelectedItem] = useState(null)

    const selectItem = (item) => {
        setSelectedItem(item)
        console.log('selected')
    }

    return (
        <>
            {selectedItem !== null ? 
            <Modal childElement={<EditTable objectBasedInfo={selectedItem} action={action} showHeading={false}/>} setState={setSelectedItem}/>
            : null}
            <table className='ItemList'>
                <thead>
                    <tr>
                        {Object.keys(items[itemKeys[0]]).map((key, index) => {
                            return (
                                <th key={`${index}-${key}`}>{returnText(key)}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {itemKeys.map((key, index) => {
                        return (
                            <Item 
                                item={items[key]} 
                                key={`${index}-${items.id}`}
                                edit={edit}
                                selectItem={selectItem}
                            />
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ItemList