import React from 'react'
import Link from "./Link";

const Links = () => {
  return (
    <div>
      <Link id='btn__zuri' name='Zuri Team' link='https://training.zuri.team/' />
      <Link id='books' name='Zuri Books' link='http://books.zuri.team/' />
      <Link id='book__python' name='Python Books' link='https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>' />
      <Link id='pitch' name='Background Check for Coders' link='https://background.zuri.team/' />
      <Link id='book__design' name='Design Books' link='https://books.zuri.team/design-rules' />
    </div>
  )
}

export default Links
