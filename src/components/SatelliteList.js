import React, {Component} from "react";
import { List, Avatar, Button, Checkbox, Spin, InputNumber } from 'antd';
import Satellite from "../assets/images/Satellite.svg";
import Item from "antd/lib/list/Item";

class SatelliteList extends Component{
    constructor(){
        super();
        this.state = {
            duration: 0,
        }

    }
    onChangeDuration = (value) =>{
        this.setState({
            duration:value
        })
    }


    onChange = e =>{
        // console.log(e); 如果不清楚e有什么，可以在console先打印出来
        const {dataInfo, checked} = e.target;
        this.props.onSelectionChange(dataInfo,checked);
    }
    // 用户在点击Track buttom 会触发onChange事件(事件是buttom这个component传进onChange的)，在e.target中拿到两个参数：dataInfo和checked
    // 这样我们就知道哪个卫星被用户checked了
    // 拿到这个信息传给parent；
    render(){
        const satList = this.props.satInfo ? this.props.satInfo.above : [];
        return(
            <div className = "sat-list-box">
                <Button
                  className = "sat-list-btn"
                  size = "large"
                  disabled = {this.props.disableTrack}
                  onClick = {()=> this.props.trackOnclick(this.state.duration)}
                  >
                    Track on the Map
                  </Button>
                  <div className="list-item">
                    <label>Track Duration </label>
                    <InputNumber
                        min={0}
                        max={90}
                        defaultValue={0}
                        style={{margin: "0 2px"}}
                        onChange={this.onChangeDuration}
                    />
                </div>
                <hr/>
                
                {  
                    this.props.loading?
                    <Spin tip = "Loading Satellites..."/>:
                    <List
                       className = "sat-list"
                       itemLayout = "horizontal"
                       size = "small"
                       dataSource = {satList}
                       renderItem = {item => (
                           <List.Item
                               actions = {[<Checkbox dataInfo = {item}
                                           onChange = {this.onChange}/>]}
                           >
                               <List.Item.Meta
                                    avatar = {<Avatar size = {50} src = {Satellite}/>}
                                    title = {<p>{item.satname}</p>}
                                    description = {`Lauch Date:${Item.lauchDate}`}
                               />
                            </List.Item>
                       )}
                    />
                }
            </div>


        );
    }
}
export default SatelliteList;