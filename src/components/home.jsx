import React, { Component } from 'react';
import { Grid, TabBar, Tabs, SearchBar, WingBlank, WhiteSpace, Carousel, NoticeBar } from 'antd-mobile'
import axios from '../http';
import './css/home.css'

class Home extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
    menu: [],
    title: []
  }
  Title = async() => {
    const { data, meta: { status, msg } } = await axios.post('homes/info')
    console.log(data.list,status,msg);
    this.setState({
      title:data.list
    })
    console.log(this.state.title);
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(async () => {
      const { data, meta: { status, msg } } = await axios.post('/homes/menu')
      console.log(data, status, msg)
      this.setState({
        data: [0, 1, 2],
        menu: data.list
      });
      console.log(this.state.menu);
    }, 0)
    this.Title()
  }

  render() {
    const tabs2 = [
      { title: '主页', sub: 'main' },
      { title: '资讯', sub: 'news' },
      { title: '微聊', sub: 'chat' },
      { title: '我的', sub: 'mine' }
    ]
    const data = this.state.menu.map((item, i) => ({
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: `${item.menu_name}`
    }
    ))

    const Tit = () => {
      return this.state.title.map((item,i)=>{
        return (
          <div>
            <WhiteSpace size="lg" />
            <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
              {item.info_title}
            </NoticeBar>
          </div>
        )
      }
    )}
    return (
      <TabBar>
        <Tabs tabs={tabs2}
          initialPage={0}
          swipeable={false}
          tabBarPosition="bottom"
        >
          <div style={{ backgroundColor: '#fff' }}>
            <SearchBar placeholder="Search" maxLength={8} />
            <WhiteSpace />
            <WingBlank>
              <Carousel
                autoplay={true}
                infinite
              >
                {this.state.data.map(val => (
                  <a
                    key={val}
                    href="script:"
                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                  >
                    <img
                      src={`http://47.96.21.88:8086/public/${val + 1}.png`}
                      alt=""
                      style={{ width: '100%', verticalAlign: 'top' }}
                      onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                        this.setState({ imgHeight: 'auto' });
                      }}
                    />
                  </a>
                ))}
              </Carousel>
            </WingBlank>
            <Grid data={data} activeStyle={false} />
            <Tit />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of second tab
      </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of third tab
      </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            我的
      </div>
        </Tabs>
      </TabBar>
    )
  }
}

export default Home
