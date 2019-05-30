import React, {Component} from 'react';
import FloatingActionButton from '@material-ui/core/Button';
import ArrowIcon from '@material-ui/icons/KeyboardArrowDown';
import './header.css';

class HeaderComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
              height: props.height,
              scrollTo: props.height
            };
        }
    
        updateDimensions() {
          this.setState({
            height:window.innerHeight+'px',
            scrollTo: window.innerHeight
          });
        }
    
        async componentDidMount() {
          window.addEventListener("resize", this.updateDimensions.bind(this));
          this.updateDimensions();
        }
    
        componentWillUnmount() {
          window.removeEventListener("resize", this.updateDimensions.bind(this));
        }
    

    
        render() {
            return (
              <div className="header-wrapper" style={{"height": this.state.height}}>
                <div className="header">
                    <h3>Nicholas Nguyen</h3>
                    <h6>Software Engineer</h6>
                </div>
                <div className="scroll-down-btn">
                  <FloatingActionButton mini={true} backgroundColor="#A80202" >
                    <ArrowIcon />
                  </FloatingActionButton>
                </div>
    
              </div>
            );
        }
    }

export default HeaderComponent;
