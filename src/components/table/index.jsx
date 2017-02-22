import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TableEntry from './tableentry';
import './table.css';

export default class Table extends Component {
    componentWillReceiveProps() {
            this.props.tabledata.forEach( el => {
                const ref = this.refs[el.key];
                const domNode = ReactDOM.findDOMNode(ref);
                const bounding = domNode.getBoundingClientRect();
                this.setState({[el.key]: bounding});
            });
    }
    componentDidUpdate(previousProps) {
        this.props.tabledata.forEach( el => {
                const ref = this.refs[el.key];
                const domNode = ReactDOM.findDOMNode(ref);
                const newBounding = domNode.getBoundingClientRect();
                const oldBounding = this.state[el.key];

                const deltaX = oldBounding.left - newBounding.left;
                const deltaY = oldBounding.top - newBounding.top;

                requestAnimationFrame(()=>{
                    domNode.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
                    domNode.style.transition = 'transform 0s';

                    requestAnimationFrame(()=>{
                        domNode.style.transform = '';
                        domNode.style.transition = 'transform 0.4s';

                    });

                });
     
            });

    }
    render() {
        return(
            <section className="table">
            <table>
            <tbody>
            <tr className="table-header">
            <td className="table-header__position" >Position</td>
            <td className="table-header__club" >Club</td>
            <td className="table-header__played" >Played</td>
            <td className="table-header__won" >Won</td>
            <td className="table-header__drawn" >Drawn</td>
            <td className="table-header__lost" >Lost</td>
            <td className="table-header__gf" >GF</td>
            <td className="table-header__ga" >GA</td>
            <td className="table-header__gd" >GD</td>
            <td className="table-header__points" >Points</td>
            </tr>
            {
          this.props.tabledata.map((tabledata, index) => {
          return <TableEntry ref={tabledata.key} position={index +1} key={tabledata.key} data={tabledata} />
          })
        }
        </tbody>
        </table>
        </section>
        );
    }
}