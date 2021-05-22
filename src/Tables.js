
import { Table, Tag, Space,Row,Col,Typography } from 'antd';

import 'antd/dist/antd.css'


const {Title} = Typography
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const Tables =()=>{
   return( 
     <body>
     <Row justify="center" >
       <Col span={24} style={{height:"60px"}}></Col>
    <Col  span={12} sm={{span:12}}>
    <Typography>
         <Title>Tables</Title>
       </Typography>
    <Table columns={columns} dataSource={data} />
    </Col>
  </Row>
  </body>
   )
}

export default Tables;
//ReactDOM.render(<Table columns={columns} dataSource={data} />, mountNode);
/*
 <div className="space-align-block" style={{backgroundColor:"white"}}>
     <Space align="center">
     <Row >
    <Col  span={6} offset={6}>
    <Typography>
         <Title>Tables</Title>
       </Typography>
    <Table columns={columns} dataSource={data}/>
    </Col>
  </Row>
     </Space>
   </div>
   <div className="row ">
      <div className="col-lg-6 col-sm-10 offset-lg-3 offset-sm-1">
      <Table columns={columns} dataSource={data}/>
      </div>
    </div>
    <div className="row ">
      <div className="col-12">
    <div className="col-sm-6  offset-sm-3">
    <Table columns={columns} dataSource={data}/>
    </div>
    </div>
  </div>
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
*/
