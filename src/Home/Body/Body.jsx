import React from 'react'
import Article from './ArticleNew/Article'
import OurPopose from './OurPopose'
import SearchInfor from './Search/SearchInfor'
import {S_ContainerBody} from './S_Body'
const Body = () => {
  return (
    <S_ContainerBody>
        <OurPopose/>
        <SearchInfor/>
        <Article/>
    </S_ContainerBody>
  )
}

export default Body