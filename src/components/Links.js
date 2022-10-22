import React from 'react'
import Link from "./Link";

function Links() {
  return (
    <section className='links flex column align-center full-width'>
      <Link id='' name='Twitter Link' link='https://twitter.com/ronniiii_i' />
      <Link id='btn__zuri' name='Zuri Team' link='https://training.zuri.team/' />
      <Link id='books' name='Zuri Books' link='http://books.zuri.team/' />
      <Link id='book__python' name='Python Books' link='https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>' />
      <Link id='pitch' name='Background Check for Coders' link='https://background.zuri.team/' />
      <Link id='book__design' name='Design Books' link='https://books.zuri.team/design-rules' />
    </section>
  )
}

export default Links
