import React, { use } from 'react';
import { NavLink } from 'react-router';


const categoryPromice = fetch('/categories.json').then(res =>res.json())

const Categories = () => {
    const category = use(categoryPromice)
    return (
        <div>
            <h2 className='font-bold '>All Category {category.length}</h2>

            <div className='grid grid-cols-1 mt-5 gap-3'>
                {
                category.map(category=>
                <NavLink key={category.id}
                className={'btn bg-base-100 border-0 shadow-none hover:bg-base-200 font-semibold'}
                to={`/catagory/${category.id}`}
                >
                    {category.name}</NavLink>)
            }
            </div>

        </div>
    );
};

export default Categories;