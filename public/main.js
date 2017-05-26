//main file for rendering app's UI
//Oscar Chavez April 2017
//ReactJS, Bootstrap, jQuery, Babel, Webpack,
//FrontEnd main.js 
//cs103 need to take online stanford uni
var React = require('react');
var ReactDOM = require('react-dom');


var storeData = {
	"RESTAURANT_NAME" : "THe chillBill Cafe",
	"TITLE" : "Menu",
}

//pairs with itemsDB will admit it needs better implementation
var categoriesDB = {
	"CATEGORY1" : "Breakfast",
	"CATEGORY2" : "Sandwich",
	"CATEGORY3" : "Dinner",
}

var itemsDB = [ {"itemID":1001,"name":"Ranch House Combo","imgURL": "./images/placeholder600x380.png","price":8,"category":"Breakfast", "scURL": "./images/placeholder150.png"},{"itemID":1002,"name":"Huevos Ranch House","imgURL":"./images/placeholder600x380.png","price":7,"category":"Breakfast"},{"itemID":1003,"name":"Steak & Eggs","imgURL":"./images/placeholder600x380.png","price":11,"category":"Breakfast"},
{"itemID":1004,"name":"Hamburger","imgURL":"./images/placeholder600x380.png","price":8,"category":"Sandwich"},{"itemID":1005,"name":"Hot Ham & Cheese","imgURL":"./images/placeholder600x380.png","price":8,"category":"Sandwich"},{"itemID":1006,"name":"BLT","imgURL":"./images/placeholder600x380.png","price":8,"category":"Sandwich"},
{"itemID":1007,"name":"Chicken Fried Steak","imgURL":"./images/placeholder600x380.png","price":10,"category":"Dinners"},{"itemID":1008,"name":"Chopped Steak","imgURL":"./images/placeholder600x380.png","price":10,"category":"Dinners"},{"itemID":1009,"name":"Tilapia","imgURL":"./images/placeholder600x380.png","price":10,"category":"Dinners"}, ]
//Variables for app
const CATEGORY1 ="Breakfast";
const CATEGORY2 = "Sandwich";
const CATEGORY3 ="Dinners";

class Header extends React.Component{
	render(){
		
		var style = {
			backgroundColor: "blue",
			height: "100px",
		}

		return(
			<nav >
	  			<div className="container-fluid" style={style}>
	  				<h1 className="text-center"> {this.props.restaurantName} </h1>
	  			</div>
			</nav>
			)}} // end of header component

class Footer extends React.Component{
	
	render(){
		var style ={
			backgroundColor: "blue",
			height: "200px",
		}
		return(
			<div className="container-fluid" style={style}>
			<div className="col-sm-12">
		   				<a href="#category1" className="btn btn-default">Go to Google</a>
		   				</div>
				</div>
				)}}












class Item extends React.Component {
  
  /**/

  constructor(props){
  	super(props);  	
  	this.state = this.props.item; //state = { name: "blah blah", multipleProperties: "because its aon json object"}
  }//end constructor

  handleQuantityButton(n){
  	this.setState({
  		quantity: n
  	})

  }

  handleSizeButton(string){
  	this.setState({ size: string})
  }

  handleTypeButton(string){
  	this.setState({type: string})
  }

  //Calculate total price of currentItem
  //lifst current object to Menu.state.virtualOrder 
  handleAddToCart(){
  	//var currentItem = this.state;
  	//currentItem.totalPrice = currentItem.price * currentItem.quantity;
  	if (this.state.quantity > 0 && this.state.type != null && this.state.size != null){
  		this.props.addToCart(this.state);
  		//reset field for next user input
  		this.setState({
  			size: "",
  			quantity: "",
  			type: "",
  		});

  		// Correct
//		this.setState((prevState) => ({}));
  	}
  }
  render(){

  	var style = {
  		backgroundColor: "gray",
  	}

    return(
		    <div className="col-sm-4 " >
		    	<div className="container-fluid text-center" style={style} >
		        	<h3 > {this.props.item.name}</h3>
		        	<img className=" img-responsive center-block" src={this.props.item.imgURL}/> 
		        	<div className="row">
		        		<div className="col-sm-12 ">
		        			
		        			<div className="btn-group ">
							<div className="dropdown btn-group ">
			  					<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> 
			  						Type: {this.state.type}
			    					<span className="caret"></span>
			  					</button>
					  			<ul className="dropdown-menu" aria-labelledby="dropdownMen3">
					    			<li><button className="btn btn-default btn-block" onClick={()=>this.handleTypeButton("Option 1")} > Option 1 </button></li>
					    			<li> <button className="btn btn-default btn-block" onClick={()=>this.handleTypeButton("Option 2")} > Option 2 </button> </li>
					    			<li><button className="btn btn-default btn-block" onClick={()=>this.handleTypeButton("Option 3")} > Option 3 </button>   </li>  
					  			</ul>
							</div>


							<div className="dropdown btn-group">
			  					<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> 
			  						Size: {this.state.size}
			    					<span className="caret"></span>
			  					</button>
					  			<ul className="dropdown-menu" aria-labelledby="dropdownMen2">
					    			<li><button className="btn btn-default btn-block" onClick={()=>this.handleSizeButton("s")} > s </button></li>
					    			<li> <button className="btn btn-default btn-block" onClick={()=>this.handleSizeButton("m")} > m </button> </li>
					    			<li><button className="btn btn-default btn-block" onClick={()=>this.handleSizeButton("l")} > l </button>   </li>  
					  			</ul>
							</div>

							<div className="dropdown btn-group">
			  					<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> 
			  						Qty: {this.state.quantity}
			    					<span className="caret"></span>
			  					</button>
					  			<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
					    			<li><button className="btn btn-default btn-block" onClick={()=>this.handleQuantityButton(1)} > 1 </button></li>
					    			<li> <button className="btn btn-default btn-block" onClick={()=>this.handleQuantityButton(2)} > 2 </button> </li>
					    			<li><button className="btn btn-default btn-block" onClick={()=>this.handleQuantityButton(3)} > 3 </button>   </li>  
					  			</ul>
							</div>
							</div>


						</div>
						<div className="col-sm-12">
							<button className="btn btn-block btn-primary" onClick={()=>this.handleAddToCart()}> Add to Cart</button>
		   				</div>

		   				
		   			</div>
		   		</div>
		   	</div>
   )//end of return
}}








class Payment extends React.Component{
	render(){

		var testVar = "TEST";
		return(
			<div className="row ">
				
				<div className="col-md-6">
					<h2> Checkout </h2>

					<form action="http://localhost:3000/form_userInfo" method="post">
						<h5>Billing Information </h5>
						<div className="row">
							<div className="col-xs-4">
								First Name:
							</div>
							<div className="col-xs-2">
								<input type="text" name="firstName" />
								<div name="testVar" value={testVar} > </div>
							</div>
						</div>
						

						<div className="row">
							<div className="col-xs-4" >
								Last Name:
							</div>``
							<div className="col-xs-2 ">
								<input type="text"  name="lastName"/>
							</div>
						</div>

						<div className="row">
							<div className="col-xs-4" >
								Address: 
							</div>``
							<div className="col-xs-2 ">
								<input type="text"  name="addressLine1"/>
							</div>
						</div>

						<div className="row">
							<div className="col-xs-4" >
								Card Number:
							</div>``
							<div className="col-xs-2 ">
								<input type="text"  name="creditCardNumber"/>
							</div>
						</div>



						<button type="submit" className="btn"> Submit Order </button>
					</form>
			
			</div></div>
	)}}

class SubShoppingCartItem extends React.Component{
	render(){
		var style = {
			backgroundColor: "red",
			borderColor: "black",
			border: "solid",
			borderWidth: "5px",
			minHeight: "100px",
			minWidth: "100px"
		}
		return(
			<div className = "col-sm-2" style={style}>
        		<h1> {this.props.item.name} </h1>
        	</div>
			)}}


class SubShoppingCart extends React.Component{
	
	render(){

		var style = {
			backgroundColor: "pink",
		}

		var Order = this.props.order;
		var orderItemized = [];

		Order.forEach((object,index) => {
			orderItemized.push(<SubShoppingCartItem item={object} /> )
		})

		return(
			<div  className="container-fluid" style={style}>
				<div className="row">	
					{orderItemized}
			</div></div>
			)}}


class ItemShoppingCart extends React.Component{
	render(){
		return( <div className="col-sm-3">
					<h3>{this.props.item.name} </h3>
					<img className="img-responsive" src={this.props.item.scURL} />
					<p> Type: {this.props.item.type} Size: {this.props.item.size} </p>
					<p> Price: {this.props.item.price} </p>
					<p> Quantity: {this.props.item.quantity} </p>
					<p> total price: {this.props.item.totalPrice} </p>

				</div>)
	}
}

class ShoppingCart extends React.Component{
	
	//ShoppingCart is responsible for rendering the items
	//in the shopping cart, with the ability to remove from it.
	//it also has a button that when pressed,
	//the payment collection component is renderered

	constructor(props){
		super();
		this.state = {orderTotal: 0}

	}

	submitObject(){
		fetch('https://localhost:3000/json', {
		  method: 'POST',
  		headers: {
    				'Accept': 'application/json',
  				  'Content-Type': 'application/json',
  			},
  		body: JSON.stringify({
    			firstParam: 'yourValue',
    		secondParam: 'yourOtherValue',
  })})}

	processShoppingCart(){
			var Order = this.props.order;
			var orderTotal = 0;
			for (var i = 0; i < Order.length; i++){
				Order[i].totalPrice = Order[i].price * Order[i].quantity;
				orderTotal= orderTotal + Order[i].totalPrice;
			}
			return Order;
		}

	calculateTotal(){
		var total = 0;
		for (var i = 0; i < this.props.order.length; i++){
				total= total + this.props.order[i].totalPrice;
			}
		return total;
	}
	render(){
		//get local copy of order
		var Order = this.processShoppingCart();
		//array will contain ItemShoppingCart components
		var orderList = []

		var orderTotal = this.calculateTotal();

	
		Order.forEach((element,index) => {
			orderList.push(<ItemShoppingCart item={element} />)
		})
		//css
		var style = {
			"backgroundColor": "green",
			"marginTop": "100px"
		}
		//end css
		return(
				<div  className=" container-fluid " style={style}>
					<div className="container">
						<div className="row">
							<h1>ShoppingCart</h1>
							{orderList}
						</div>
						<div className="row">
							<h2> Total: {orderTotal}</h2>
							<button onClick={ ()=>this.props.checkout()}> Checkout </button>
							<button onClick={() =>this.submitObject()}>Submit </button>
						</div>
					</div>
				</div>
			)}}

class Menu extends React.Component{
	///State/////////////////
	constructor(props){
		super(props);
		//virtual order will be an array of objects, each objects is an item in a virtual shopping cart or order
		//example: virtualOrder = [{itemName: "food", quantity: 4, price: 12.00},{itemName: "food", quantity: 4, price: 12.00}]
		this.state = {
			virtualOrder: [{"itemID":1001,"name":"Ranch House Combo","imgURL": "./images/placeholder600x380.png","price":8,"category":"Breakfast","type":"Option1","quantity": 2,"size":"l","scURL": "./images/placeholder150.png"}],
			checkoutToggle: false,
		}

	}///////////////////////


	//Functions passed down to components//////////////////////
	//addToCart() is passed to <Item /> Component in props
	//its function is to update the state.virtualOrder to append and item to the virualOrder array
	//the item
	addToCart(item){
		this.setState((prevState) => ({
			virtualOrder: prevState.virtualOrder.concat([item])
		}))
	}

	//Ready for checkout checkoutpayment
	checkoutToggle() {
			console.log("checkout button pressed")
			if (this.state.checkoutToggle == false){
				this.setState({ checkoutToggle: true })
			} else {
				this.setState({ checkoutToggle: false }) 
			}
		}
	//////////////////////////////////////////////////////////end of functions passed to components

	 shoppingCartRender(){
			//render sC when it's not empty
			//feed activeOrder to ShoppingCart component to render
			//only after user has added >0 products to cart
			if (this.state.virtualOrder.length > 0){

				return (
						<div> 
							{<ShoppingCart order={this.state.virtualOrder}
											checkout = {() => this.checkoutToggle()}
								/>} 
						</div>
						)
			}
		}

	subShoppingCartRender(){
			if (activeOrder.length > 0 ){
				return <div> {<SubShoppingCart order={this.props.state} /> } </div>
			}
	}

	//checoutForm
	paymentFormRender(){
			if( this.state.checkoutToggle == true )
				return <div> <Payment /> </div>
		}


	render(){

		var categoriesArray = [];

		var category1 = this.props.category1;
		var category2 = this.props.category2;
		var category3 = this.props.category3;

		//Code below handles sorting the data and creating
		//new array with only appetizer objects
		var category1Array =[];


		this.props.items.forEach( (element,index)=>{
			if (element.category== category1 ){
				category1Array.push(
									<Item 	item = {element}
								   			addToCart = {(item)=> this.addToCart(item)}
								   			
								   	/>
				   			 );
			}
		});
		//
		//*Category 2
		var category2Array = [];
		this.props.items.forEach((element, index) => {
			if(element.category==category2){
				category2Array.push(<Item item={element} 
									addToCart = {(item)=> this.addToCart(item)}
									/>)
			}
		})
		//
		//*Category 3 . check the condition to know what kind of cateogry
		var category3Array = [];
		this.props.items.forEach((element,index) =>{
			if (element.category== category3){
				category3Array.push(<Item item={element}
									addToCart = {(item)=> this.addToCart(item)}
									 />)
			}
		})



	

		//css styles
		var style = {
			"backgroundColor": "yellow",
			"paddingBottom": "100px",
		}

		return(

			<div className="container" style={style}>

				<h1 className="text-center"> {this.props.title}</h1>
				
				<div className="row" >
					<h2 className="text-center" id="category1"> {this.props.category1}</h2>
					{category1Array}
				</div>

				<div className="row">
					<h2 className="text-center"> {this.props.category2} </h2>
					{category2Array} 
				</div>

				<div className="row">
					<h2 className="text-center"> {this.props.category3} </h2>
					{category3Array}
				</div>

				{/*Conditional rendering of shopping Cart*/}
				{this.shoppingCartRender()}
				{this.paymentFormRender()}
			</div>

			)}}

//ITEMS from main data base
class App extends React.Component{

	render(){

		var style = {
			backgroundColor: 'red',
		}
			return(

			<div className="container-fluid" style={style} >
				{<Header restaurantName={storeData.RESTAURANT_NAME} />}
				{<Menu items={itemsDB} 
						title={storeData.TITLE}
						categories={categoriesDB}
						category1={CATEGORY1}
						category2={CATEGORY2}
						category3={CATEGORY3} /> } 
				{<Footer />}

			</div>
			)}
		}

//Main()
ReactDOM.render(
  <App />,
  //WHERE TO RENDER VIRTUAL DOM
  document.getElementById('root')
);