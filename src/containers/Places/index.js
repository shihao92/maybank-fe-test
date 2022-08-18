import { 
  Row, Col, AutoComplete, 
  Layout, Spin
} from 'antd';

import WithPlaces from './actions';

import './index.scss'

const { Content } = Layout;
const { Option } = AutoComplete;

const PlacesContainer = ( props ) => {
  return (
    <Layout>
      <Content>
        <Row>
          <Col span={ 24 } className="container">
            <AutoComplete
              style={{
                width: '70%'
              }}
              placeholder="Type the place keyword here" 
              onSearch={ val => {

              }}
              onSelect={ val => {

              }}>
              {
                props.data.SearchReducer.searches.map(( item, index ) => {
                  return (
                    <Option key={ `${ item }-${ index }` } value={ item }>
                      { item }
                    </Option>
                  )
                })
              }
            </AutoComplete>
            {
              props.onLoadPlaces && (
                <Spin size="large" className="pl-1" />
              )
            }
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default WithPlaces( PlacesContainer );
