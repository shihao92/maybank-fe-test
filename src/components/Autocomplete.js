import { AutoComplete, Input } from 'antd'

const AutocompleteComponent = props => {
  return (
    <AutoComplete
      style={{
        width: '100%',
        marginBottom: '35px'
      }}
      onSelect={ val => {
        props.onSelect( val )
      }}
      options={ props.options }
      filterOption={( inputValue, option ) => {
        return option.value.indexOf( inputValue ) > -1
      }}>
      <Input.Search 
        size={ props.searchSize }
        placeholder={ props.placeholder }
        onSearch={ val => {
          props.onSearch( val ) 
        }}
        onPressEnter={ e => {
          props.onPressEnter( e )
        }} />
    </AutoComplete>
  )
}

export default AutocompleteComponent