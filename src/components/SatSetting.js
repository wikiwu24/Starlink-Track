import React,{Component} from 'react';
import {InputNumber,Button} from 'antd'

class SatSetting extends Component{
    constructor(){
        super();
        this.state = {
            observeLat : 0,
            observeLong : 0,
            observeAlt : 0,
            radius: 90,
        }
    }

    onChangeLat = (value) => {
        this.setState({
            observeLat : value 
        })
    }
    onChangeLong = (value) =>{
        this.setState({
            observeLong: value
        })
        
    }
    onChangeAlt = (value) =>{
        this.setState({
            observeAlt : value
        })  
    }
    onChangeRadius = (value) =>{
        this.setState({
            radius : value
        }) 
    }

    showSatellite = () =>{
        this.props.onShow(this.state);     
        /* props 一定是从parent传来的属性，调用其中的onShow(是parent定义在子标签中的可以),在所对应调用的方程中传入参数(变化的state)*/
    }
    render(){
        return(
            
            <div className = "sat-setting">
               <div className="loc-setting">
                   <p className = 'setting-label'>From Location</p>
                   <div className="setting-list two-item-col">
                       <div className = "list-item">
                           <label>Longitude:</label>
                           <InputNumber
                               min = {-180}
                               max = {180}
                               defaultValue = {0}
                               style = {{margin : "0 20px"}}
                               onChange = {this.onChangeLong} 
                           />
                       </div>

                       <div className = "list-item right-item">
                           <label>Latitude:</label>
                           <InputNumber 
                               placeholder = "latitude"
                               min = {-90}
                               max = {90}
                               defaultValue = {0}
                               style = {{margin : "0 20px"}}
                               onChange = {this.onChangeLat}
                           />
                       </div>
                    </div>
                    <div className = "setting-list">
                        <div className = "list-item">
                            <label>Elevation(meters):</label>
                            <InputNumber 
                               min = {0}
                               max = {90}
                               defaultValue = {0}
                               style = {{margin : "0 20px"}}
                               onChange = {this.onChangeAlt}
                           /> 
                        </div>
                    </div> 

                    <p className = "setting-label"> Restrictions</p> 
                    <div className = "setting-list">
                        <div className = "list-item">
                            <label>Search Radius</label>
                            <InputNumber
                               min = {0}
                               max = {90}
                               defaultValue = {0}
                               style = {{margin : "0 20px"}}
                               onChange = {this.onChangeRadius}
                            />
                        </div>
                    </div>

                    <div className = "show-nearby">
                        <Button 
                            className = "show-nearby-btn"
                            size = "large"
                            onClick = {this.showSatellite}
                        >
                          Find Nearby Satellites  
                        </Button>
                    </div>
               </div>
            </div>
        );
    }
}
export default SatSetting;