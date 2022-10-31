import React from 'react'

import Link from "./Link";

function Links() {
  return (
    <section className='links flex column align-center full-width'>
      <Link
        id=''
        name='My Twitter Link'
        link='https://twitter.com/ronniiii_i'
        title='title'
      />
      <Link
        id='btn__zuri'
        name='Zuri Team'
        link='https://training.zuri.team/'
        title='title'
      />
      <Link
        id='books'
        name='Zuri Books'
        link='http://books.zuri.team/'
        title='title'
      />
      <Link
        id='book__python'
        name='Python Books'
        link='https://books.zuri.team/python-for-beginners?ref_id=Roni'
        title='title'
      />
      <Link
        id='pitch'
        name='Background Check for Coders'
        link='https://background.zuri.team/'
        title='title'
      />
      <Link
        id='book__design'
        name='Design Books'
        link='https://books.zuri.team/design-rules'
        title='title'
      />
    </section>
  )
}

export default Links
