import React from 'react'
import Calendar from "./components/Calendar"
import Time from './components/Time'
import 'antd/dist/antd.css'
import './App.css';
import DataTable from "./components/DataTable";
import { Layout } from 'antd';

import SideBar from "./layout/Sidebar"
import BottomFooter from "./layout/BottomFooter"
import Load from "./components/Loading"
import { Row, Col, Divider } from 'antd'

const { Header, Content } = Layout;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    const data = [];
    for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: 'John Brown',
        age: i + 1,
        street: 'Lake Park',
        building: 'C',
        number: 2035,
        companyAddress: 'Lake Street 42',
        companyName: 'SoftLake Co',
        gender: 'M',
    });
  }
    this.setState({
      isLoaded: true,
      items: data
    });
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Load />
    } else {
      return (
        <Layout style={{ minHeight: '100vh' }}>
          <SideBar />
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0, textAlign: 'center'}} >Data Table</Header>
            <Content style={{ margin: '16px' }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <div style={{ margin: "16px 0px" }}>
                <Divider orientation="left">Select Date and Time</Divider>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={6}>
                    <Calendar />
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <Time />
                  </Col>
                </Row>
              </div>
                <DataTable data={items}/>
              </div>
            </Content>
            <BottomFooter />
          </Layout>
        </Layout>
      );
    }
  }
}


// function App() {
//   return (
//     <div className="App">
//       {/* <Navbar /> */}
//       <Calendar />
//       <Time />
//       <DataTable />
//     </div>
//   );
// }


export default App;
