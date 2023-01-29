import React, { useState } from 'react'

import '../../ComponentCss/ItemList.css'
import EditTable from './EditTable'
import Modal from './Modal'

import { returnText } from '../TextFunctions'
import Item from './Item'

function ItemList({items, edit=false, action}) {
    const headerKeys = Object.keys(items[0])
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
                        {headerKeys.map((key, index) => {
                            return (
                                <th key={`${index}-${key}`}>{returnText(key)}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => {
                        return (
                            <Item 
                                item={item} 
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