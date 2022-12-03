import React from 'react'
import styled from 'styled-components'

import Search from './Search'

function SearchAndFilter() {
  return (
    <SearchAndFilterPane>
        <Search/>
    </SearchAndFilterPane>
  )
}

export default SearchAndFilter

const SearchAndFilterPane = styled.div`
    display: flex;
    align-item: center;
    justify-content: space-between;
    margin:20px 0px;
`