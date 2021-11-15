import React from 'react'
import Head from 'next/head'
import Filter1Icon from '@material-ui/icons/Filter1'
import Filter2Icon from '@material-ui/icons/Filter2'
import Filter3Icon from '@material-ui/icons/Filter3'
import Filter4Icon from '@material-ui/icons/Filter4'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Button from '@material-ui/core/Button'


const Plans = (props) => {

  const Router=useRouter()
    return (
        <div>

            <Head>
            <script type='text/javascript' src="js/method-assign.js"></script>



<script type='text/javascript' src="js/jquery-3.3.1.min.js"></script>

<script type='text/javascript' src="js/js-plugins/crum-mega-menu.js"></script>
<script type='text/javascript' src="js/theme-plugins.js"></script>
<script type='text/javascript' src="js/js-plugins/isotope.pkgd.min.js"></script>
<script type='text/javascript' src="js/js-plugins/ajax-pagination.js"></script>
<script type='text/javascript' src="js/js-plugins/swiper.min.js"></script>
<script type='text/javascript' src="js/js-plugins/material.min.js"></script>

<script type='text/javascript' src="js/js-plugins/bootstrap-datepicker.js"></script>

<script type='text/javascript' defer src="fonts/fontawesome-all.js"></script>

<script src="js/main.js"></script>
            </Head>
           <section className="pt-mobile-80">

  <div style={{}} className="container">
    <div className="row medium-padding100">
    <h4 style={{textAlign:'center',marginBottom:60}}>
               Plans suited for everyone
             </h4>
      <div style={{padding:40}} className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb30" data-mh="pricing-item">
        <div style={{}} className="crumina-module crumina-pricing-table pricing-table--style1">
          <div className="pricing-thumb">
          <Filter1Icon style={{width:70,height:70,color:'#ffab00'}} />
          </div>
          <h5 className="pricing-title">Starter <span></span></h5>
          <div className="price-box">
            <div className="price-sup-title">Amount spent:</div>
            <div className="price-valu">$200-$999</div>
          </div>
          <ul className="pricing-tables-position">
            <li className="position-item">
              <div className="currency-details-item">
                <h6 className="title">Referal bonus</h6>
                <h6 className="value">5%</h6>
              </div>
            </li>
            <li className="position-item">
              <div className="currency-details-item">
                <h6 className="title">Principle:</h6>
                <h6 className="value">Back</h6>
              </div>
            </li>
            <li className="position-item">
              <div className="currency-details-item">
                <h6 className="title">Duration:</h6>
                <h6 className="value">7 days</h6>
              </div>
            </li>
          </ul>
          <a onClick={()=>{Router.push(`/signup/${props.bomber}`)}} className="btn btn--larg btn--gree-light btn--transparent">Join now</a>
        </div>
      </div>
      <div style={{padding:40}} className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb30" data-mh="pricing-item">
        <div className="crumina-module crumina-pricing-table pricing-table--style1">
          <div className="pricing-thumb">
           <Filter2Icon style={{width:70,height:70,color:'#ffab00'}} />
          </div>
          <h5 className="pricing-title"> Standard < span></span></h5>
          <div className="price-box">
            <div className="price-sup-title">Amount spent:</div>
            <div className="price-valu">$1000-$4999</div>
          </div>
          <ul className="pricing-tables-position">
            <li className="position-item">
              <div className="currency-details-item">
                <h6 className="title">Referal bonus:</h6>
                <h6 className="value"> 8%</h6>
              </div>
            </li>
            <li className="position-item">
              <div className="currency-details-item">
                <h6 className="title">Capital:</h6>
                <h6 className="value">Back</h6>
              </div>
            </li>
            <li className="position-item">
              <div className="currency-details-item">
                <h6 className="title">Duration:</h6>
                <h6 className="value">30 days</h6>
              </div>
            </li>
          </ul>
          <a onClick={()=>{Router.push(`/signup/${props.bomber}`)}} className="btn btn--larg btn--gree-light btn--transparent">Join now</a>
        </div>
      </div>


      
      <div style={{padding:40}} className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb30" data-mh="pricing-item">
        <div className="crumina-module crumina-pricing-table pricing-table--style1">
          <div className="pricing-thumb">
            <Filter3Icon style={{width:70,height:70,color:'#ffab00'}} />
          </div>
          <h5 className="pricing-title">Investor<span></span></h5>
          <div className="price-box">
            <div className="price-sup-title">Amount Spent:</div>
            <div className="price-valu">$5000-$19999</div>
          </div>
          <ul className="pricing-tables-position">
            <li className="position-item">
              <div className="currency-details-item">
                <h6 className="title">Referal bonus:</h6>
                <h6 className="value"> 10%</h6>
              </div>
            </li>
            <li className="position-item">
              <div className="currency-details-item">
                <h6 className="title">Principal:</h6>
                <h6 className="value">Include</h6>
              </div>
            </li>
            <li className="position-item">
              <div className="currency-details-item">
                <h6 className="title">Duration:</h6>
                <h6 className="value">20 days</h6>
              </div>
            </li>
          </ul>
          <a onClick={()=>{Router.push(`/signup/${props.bomber}`)}} className="btn btn--larg btn--gree-light btn--transparent">Join now</a>
        </div>
      </div>
      <div style={{padding:40}} className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb30" data-mh="pricing-item">
        <div className="crumina-module crumina-pricing-table pricing-table--style1">
          <div className="pricing-thumb">
           <Filter4Icon style={{width:70,height:70,color:'#ffab00'}} />
          </div>
          <h5 className="pricing-title">VIP<span></span></h5>
          <div className="price-box">
            <div className="price-sup-title">Amount Spent:</div>
            <div className="price-valu">$20k-$50k</div>
          </div>
          <ul className="pricing-tables-position">
            <li className="position-item">
              <div className="currency-details-item">
                <h6 className="title">Referal bonus:</h6>
                <h6 className="value"> 15%</h6>
              </div>
            </li>
            <li className="position-item">
              <div className="currency-details-item">
                <h6 className="title">Principal:</h6>
                <h6 className="value">Include</h6>
              </div>
            </li>
            <li className="position-item">
              <div className="currency-details-item">
                <h6 className="title">Duration:</h6>
                <h6 className="value">Life time</h6>
              </div>
            </li>
          </ul>
          <a onClick={()=>{Router.push(`/signup/${props.bomber}`)}} className="btn btn--larg btn--gree-light btn--transparent">Join now</a>
        </div>
      </div>
    </div>
   
  </div>
</section>

        </div>
    )
}
export default Plans
