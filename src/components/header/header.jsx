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
                    <h1>Nicholas Nguyen</h1>
                    <h6>Software Engineer</h6>
                    <h6>and</h6>
                    <h6>Content Creator</h6>
                </div>
                <div className="scroll-down-btn">
                  <FloatingActionButton>
                    <ArrowIcon />
                  </FloatingActionButton>
                </div>
    
              </div>
            );
        }
    }

export default HeaderComponent;
