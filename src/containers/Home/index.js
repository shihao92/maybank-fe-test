import { 
  Row, Col, Layout, Spin,
  List, Typography
} from 'antd';
import _ from 'lodash'
import { SearchOutlined } from '@ant-design/icons'

import AutocompleteComponent from 'components/Autocomplete'

import WithPlaces from './actions/Places';

import 'stylesheets/index.scss'

const PlacesContainer = ( props ) => {

  const updateSearchReducerAndGetGooglePlaces = ( val ) => {
    let tmp = _.cloneDeep( props.data.SearchReducer.searches )
    tmp.push({ value: val, text: val })
    props.storeUserSearches( tmp )
    props.getPlaces( val )
  }

  return (
    <Layout className="container">
      <Layout.Header></Layout.Header>
      <Layout.Content>
        <Row>
          <Col 
            span={ 24 } 
            className="container-search">
            <AutocompleteComponent
              onSelect={ val => {
                props.getPlaces( val )
              }}
              options={ props.data.SearchReducer.searches }
              searchSize={ "large" }
              placeholder={ "Type the place keyword here and press enter to search" }
              onSearch={ val => {
                updateSearchReducerAndGetGooglePlaces( val )
              }}
              onPressEnter={ e => {
                updateSearchReducerAndGetGooglePlaces( e.target.value )
              }} />
            {
              props.onLoadPlaces && (
                <Spin size="large" className="pl-1" />
              )
            }
            <List
              style={{ width: '100%' }}
              header={ <h4>Results</h4> }
              bordered
              dataSource={ props.data.ResultsReducer.results }
              renderItem={ item => (
                <List.Item>
                  <Typography.Text mark><SearchOutlined /></Typography.Text> { item.description }
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
}

export default WithPlaces( PlacesContainer );
