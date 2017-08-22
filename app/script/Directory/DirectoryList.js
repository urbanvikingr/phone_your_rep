import React from 'react'
import DirectoryListRow from './DirectoryListRow'

export default function DirectoryList(props) {
  return (
    <ul className={"directory-list " + props.hidden}>
      { props.contacts.map( (rep,i) => {
        return (
          <div key={i}>
            <DirectoryListRow rep={rep} key={i} onClick={() => props.onClick(rep)} />
          </div>
        )
      }) }
    </ul>
  )
}