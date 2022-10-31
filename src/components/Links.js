import React from 'react'
import data from '../data/links'
import Link from "./Link";

function Links() {
    const link = data.map(item => {
      return (
        <Link
          key={`${Math.random() * 10380203040390}`}
          id={item.id}
          name={item.name}
          link={item.link}
          title={
            <>
            <h6 style={{fontSize: '14px', textAlign: 'center'}}>{item.title}</h6>
            {item.subtext}
          </>
          }
        />
      )
    })
  return (
    <section className='links flex column align-center full-width'>
      {link}
    </section>
  )
}

export default Links
