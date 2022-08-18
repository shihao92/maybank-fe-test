import { 
  Row, Col, AutoComplete, 
  Layout, Spin, Input,
  Card, List, Typography
} from 'antd';
import _ from 'lodash'
import { SearchOutlined } from '@ant-design/icons'

import WithPlaces from './actions/Places';

import 'stylesheets/index.scss'

const PlacesContainer = ( props ) => {
  return (
    <Layout className="container">
      <Layout.Header></Layout.Header>
      <Layout.Content>
        <Row>
          <Col 
            span={ 24 } 
            className="container-search">
            <AutoComplete
              style={{
                width: '100%',
                marginBottom: '35px'
              }}
              onSelect={ val => {
                props.getPlaces( val )
              }}
              options={ props.data.SearchReducer.searches }>
              <Input.Search 
                size="large" 
                placeholder="Type the place keyword here"
                onSearch={ val => {
                  let tmp = _.cloneDeep( props.data.SearchReducer.searches )
                  tmp.push({ value: val, text: val })
                  props.storeUserSearches( tmp )
                  props.getPlaces( val )
                }}
                onPressEnter={ e => {
                  let tmp = _.cloneDeep( props.data.SearchReducer.searches )
                  tmp.push({ value: e.target.value, text: e.target.value })
                  props.storeUserSearches( tmp )
                  props.getPlaces( e.target.value )
                }} />
            </AutoComplete>
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
