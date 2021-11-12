import React from 'react';
import ProductItem from '../components/ProductItem';
import '../assets/styles/containers/ProductList.scss'

const ProductList = () => {
	return (
		<section className="main-container">
			<div className="ProductList">
				<ProductItem />
			</div>
		</section>
	);
}

export default ProductList;
