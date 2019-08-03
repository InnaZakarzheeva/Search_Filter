import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const colorDiv = [
    {
      id: "Play Station 3",
      color: "red"
    },
    {
      id: "iPhone X",
      color: "green"
    },
    {
      id: "Nintendo",
      color: "red"
    },
    {
      id: "Samsung A50",
      color: "red"
    },
    {
      id: "Xiaomi Redmi 6 Pro",
      color: "green"
    },
    {
      id: "Asus",
      color: "green"
    },
    {
      id: "Lenovo A560",
      color: "red"
    },
    {
      id: "iPhone 5S",
      color: "green"
    },
    {
      id: "Samsung A30",
      color: "green"
    },
    {
      id: "Xiaomi Redmi 4",
      color: "red"
    },
    {
      id: "Sony",
      color: "green"
    },
    {
      id: "Xiaomi Redmi 7",
      color: "green"
    },
    {
      id: "Play Station 4",
      color: "red"
    },
    {
      id: "XBox 360",
      color: "green"
    },
    {
      id: "iPhone 7",
      color: "green"
    },
    {
      id: "Lenovo Tab",
      color: "red"
    },
    {
      id: "Asus X560UD",
      color: "green"
    },
    {
      id: "Samsung Galaxy Tab E",
      color: "green"
    },
    {
      id: "Huawei MediaTab",
      color: "red"
    },
    {
      id: "Acer Aspire 3 A315",
      color: "green"
    },
    {
      id: "Nokia 1 Plus Dual",
      color: "green"
    }
  ]

export default class Blocks extends React.Component{
    
  state ={
    colorButton: '',
    staticArr: [],
    filterArr: [],
    searchArr: [],
    search: ''
  }

  componentDidMount () {
    this.setState({
      filterArr: colorDiv,
      staticArr: colorDiv
    })
  }

  showButton = (color) => {
    if (color === ''){
      this.setState({
        filterArr: this.state.staticArr
      })
    } else {
      this.setState({
        filterArr: this.state.staticArr.filter( item => item.color === color)
      })
    }
  }

  handleChange = ({target: {value}}) => {
    this.setState({
        colorButton: value
    })
    this.showButton(value)
  }

  searchByName = (value) => {
      if (value === ''){
          this.setState({
              filterArr: this.state.staticArr
          })
      } else {
          const str = value.toLowerCase()
          const strFilter = this.state.filterArr.filter(item => 
              item.id.toLowerCase().includes(str)
          )
          this.setState({
              filterArr: strFilter
          })
      }
  }

  handleInput = ({target: {value}}) => {
    this.setState({
        search: value
    })
    this.searchByName(value)
  }
  render() {
  return (
    <div className="App">
      <TextField
        label="Search by name..."
        margin="normal"
        variant="outlined"
        onChange={this.handleInput}
        style={{width: "60%"}}
      />
      <div className="product-wrapper">
        <section className="button-wrapper">
            <Button variant="outlined" color="primary" value='' onClick={this.handleChange}>All Items</Button>
            <Button variant="outlined" color="primary" value='red' onClick={this.handleChange}>Red Items</Button>
            <Button variant="outlined" color="primary" value='green' onClick={this.handleChange}>Green Items</Button>
        </section>
        <section className="div-wrapper">
        {this.state.filterArr.map( (item, index) => (
            <div key={index} style={{backgroundColor: item.color}}>
                {item.id} 
            </div>
        ))}
        </section>
     </div>
    </div>
  );
}
}