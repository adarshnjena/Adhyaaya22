<script>
  let termspop4 = () => document.getElementById('termspop4').style.display='block'
  let termspop3 = () => document.getElementById('termspop3').style.display='block'  
  let termspop = () => document.getElementById('termspop').style.display='block'
  let termspop2 = () => document.getElementById('termspop2').style.display='block'
  let _termspop4 =() => document.getElementById('termspop4').style.display='none'
  let _termspop3 = () => document.getElementById('termspop3').style.display='none'
  let _termspop = () => document.getElementById('termspop').style.display='none'
  let _termspop2 = () => document.getElementById('termspop2').style.display='none' 


  import Icon from '@iconify/svelte/dist/OfflineIcon.svelte'
  import emailOutline from '@iconify-icons/ic/email.js'
  import youtubeOutline from '@iconify-icons/simple-icons/youtube.js'
  import twitterOutline from '@iconify-icons/simple-icons/twitter.js'
  import linkedinOutline from '@iconify-icons/simple-icons/linkedin.js'
  import instagramOutline from '@iconify-icons/simple-icons/instagram.js'
</script>


  <div class="trailer-footer tw-min-h-screen tw-bg-base-300 tw-sticky tw-z-20">

    <div class="adh-trailer">
      <div class="adh-trailer-heading "> 
            <h1>Do watch our ADHYAAYA'22 Trailer!</h1>
        </div>
        <div class="adh-video tw-w-full tw-text-center tw-flex tw-items-center tw-justify-center">
          <iframe class="se" width="560" height="315" src="https://www.youtube.com/embed/PFq4GTEGl_8" title="Adhyaaya'22 Teaser" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           
        </div>
    </div>    
    
    
    <footer class="footer" id="contact-us w-full">
      <div class="footer-sections w-full"> 
 
        <!-- Adhyaaya main logo -->    
        
            <div class="logo tw-w-full tw-text-center tw-flex tw-items-center tw-justify-center">
              <img src="https://ca.adhyaaya.org/assets/img/adhyaaya_logo.png" alt="Logo">
            </div>
            
            <!-- Icons part 2  -->  
            
            <div class="footer-contact-two w-screen" id="icons-two">
                <div class="mail-two"> 
                    <a class='tw-inline-flex' href="mailto:adhyaaya.gcoen@gmail.com"><Icon class='tw-mr-3 tw-w-5 tw-h-5 tw-my-auto' icon='{emailOutline}' /> <p>Have a question ? </p></a>
                  </div>   
                  <div class="yt-two">
                    <a class='tw-inline-flex' href="https://www.youtube.com/channel/UCQgGGoNJaQRxs5myAZTcbsQ" target="_blank"><Icon class='mr-3 w-6 h-6' icon='{youtubeOutline}' /> <p>Watch us on YouTube</p></a>
                </div> 
                <div class="twitter-two">
                    <a class='tw-inline-flex' href="https://twitter.com/Adhyaaya_GCOEN" target="_blank"> <Icon class='tw-mr-3 tw-w-5 tw-h-5 tw-my-auto' icon='{twitterOutline}' /> <p>Follow us on Twitter</p></a>
                </div>
                <div class="linkedin-two">
                    <a class='tw-inline-flex' href="https://www.linkedin.com/company/adhyaaya/"  target="_blank"><Icon class='tw-mr-3 tw-w-5 tw-h-5 tw-my-auto' icon='{linkedinOutline}' /> <p>Join us on LinkedIn</p></a>
                </div>
                <div class="insta-two">
                    <a class='tw-inline-flex' href="https://www.instagram.com/adhyaaya.gcoen/" target="_blank"> <Icon class='tw-mr-3 tw-w-5 tw-h-5 tw-my-auto' icon='{instagramOutline}' /> <p>Follow us on Instagram</p></a> 
                </div> 
            </div>

            <!-- Adhyaaya contains -->
            
            <div class="footer-grid ">
                <div class="footer-contents ">

                    <!-- Map yaha -->

                    <div class="footer-map">
                        <iframe title='map-iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.5210865220415!2d79.05773931443623!3d21.051840192366956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4be5e617378eb%3A0x682e0bc768d22adb!2sGovernment%20College%20of%20Engineering%20Nagpur!5e0!3m2!1sen!2sin!4v1617731462335!5m2!1sen!2sin" frameborder="0"></iframe>
                    </div>
                    
                    <!-- Contact Us -->
                    <div class="footer-contact line" id="contact-us-animation" >

                        <h1 >Contact Us
                            <!-- <div class="ani"></div> -->
                        </h1> 
                        <ul> 
                            <li><a  href="#" class="button" on:click|preventDefault={termspop4}>Contact info</a></li>
                            <li><a href="/event/team">Teams </a></li>
                        </ul>
                      </div>

                    
                    <!-- College --> 
                     
                    <div class="footer-contact line" id="college">
                        <h1 >College</h1>
                        <!-- <div class="ani"></div> -->
                        
                        <ul>
                            <li><a href="#" class="button" id="myBtn"  on:click|preventDefault="{termspop3}">About Us</a></li>
                            <li><a href="https://www.gcoen.ac.in/" target="_blank">GCOEN</a></li>
                        </ul>


                    </div> 

                    <!-- Support -->

                    <div class="footer-contact line" id="support">
                        <h1 >Support</h1>
                        <!-- <div class="ani"></div> -->
                        
                        <ul>
                            <li><a href="#" class="button"  on:click|preventDefault="{termspop}">Terms & Conditions</a></li>
                            <li><a href="#" class="button"  on:click|preventDefault="{termspop2}">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <!-- Stay Connected -->

                    <div class="footer-contact text-sm" id="icons">
                        <div class="mail" id="transform-icon">
                            <a class='tw-inline-flex' href="mailto:adhyaaya.gcoen@gmail.com"><Icon class='tw-mr-3 tw-w-5 tw-h-5 tw-my-auto' icon='{emailOutline}' /> Have a question ?</a>
                        </div>   
                        <div class="yt" id="transform-icon">
                            <a class='tw-inline-flex' href="https://www.youtube.com/channel/UCQgGGoNJaQRxs5myAZTcbsQ" target="_blank"><Icon class='tw-mr-3 tw-w-5 tw-h-5 tw-my-auto' icon='{youtubeOutline}' /> Watch us on YouTube</a>
                        </div> 
                        <div class="twitter" id="transform-icon">
                            <a class='tw-inline-flex' href="https://twitter.com/Adhyaaya_GCOEN" target="_blank"> <Icon class='tw-mr-3 tw-w-5 tw-h-5 tw-my-auto' icon='{twitterOutline}' /> Follow us on Twitter</a>
                        </div>
                        <div class="linkedin" id="transform-icon">
                            <a class='tw-inline-flex' href="https://www.linkedin.com/company/adhyaaya/"  target="_blank"><Icon class='tw-mr-3 tw-w-5 tw-h-5 tw-my-auto' icon='{linkedinOutline}' /> Join us on LinkedIn</a>
                        </div>
                        <div class="insta" id="transform-icon">
                            <a class='tw-inline-flex' href="https://www.instagram.com/adhyaaya.gcoen/" target="_blank"> <Icon class='tw-mr-3 tw-w-5 tw-h-5 tw-my-auto' icon='{instagramOutline}' /> Follow us on Instagram</a>
                        </div> 
                    </div>

                </div>  
            </div> 
        </div> 
    </footer>
    
    <footer class="footer-bottom">
        <div class="copyright">
            <p class="tw-text-sm tw-text-gray-400"> &copy; ADHYAAYA'22 | GCOEN | ALL RIGHTS RESERVED</p>
        </div>
    </footer>  
    
     

    <!-------- Popup Div ---------->
   <!-- Contact info -->
   <div class="termspop" id="termspop4">
    <div class="termspop_content2">
      <div class="container113" style="text-align: center">
        <div class="row">
          <h1 class="heading2">Contact Info</h1>
        </div>
        <div class="rowss">

<!-- yahaa kuch bhii kar saktaa hai -->
<div class="contact-info">
  
  <div class="contact-content">
    
    <div class="contact-info-img">
                    <img src="/contact info.png" alt="">
                </div> 
                
                <div class="contact-info-content">
                    <p class="reach-out">
                        Kindly reach out to us in case of any query.
                    </p>

                    <div class="contact-one">
                        <strong>Ujjwal Gupta</strong>
                        <p>CSE Co-ordinator</p> 
                        <p><a href="mailto:usgupta@gcoen.ac.in"><i class="fa">&#xf0e0;</i>Mail here</a></p>
                        <p>
                            <a href="tel:+7020138347"><i class="fa">&#xf095;</i>+91 7020138347</a>
                        </p>
                    </div>

                    <div class="contact-two">
                      <strong>Yash Bhagat</strong>
                        <p>Civil Co-ordinator</p>
                        <p ><a href="mailto:vednande10@gmail.com"> <i class="fa">&#xf0e0;</i>Mail here</a></p>
                        <p>
                            <a href="tel:+9075022332"><i class="fa">&#xf095;</i>+91 9075022332</a>
                        </p>
                    </div>
                </div>
              </div>


              
            </div>
          </div>
        <button
          value="close"
          class="close"
          on:click|preventDefault="{_termspop4}"
          >
          Close
        </button>
      </div>
    </div>
  </div>


    <!-- About Us -->
    <div class="termspop" id="termspop3">
      <div class="termspop_content2">
          <div class="container113" style="text-align: center">
            <div class="row">
              <img
              src="/favicon.png"
                style="
                  width: 30%;
                  height: 30%;
                  margin-right: auto;
                  margin-left: auto;
                  padding-bottom: 6%;
                "
                alt=""
                />
              <h1 class="heading2">GOVERNMENT COLLEGE OF ENGINEERING NAGPUR</h1>
            </div>
            <div class="rowss">
              <h1 class="r123">ABOUT US</h1>
  
              <p>
                ADHYAAYA 2021 is the fourth iteration of the national level
                technical symposium of Government College of Engineering, Nagpur.
                Students from all over Maharashtra set their keen eyes on
                Adhyaaya. Last year, more than 3500 budding technocrats from all
                across India marked their remarkable presence in Adhyaaya'20. The
                event consists of various technical, non-technical segments along
                with workshops on topics spread all over the diverse scopes of
                engineering. We strive to offer a platform for the student
                community to develop and showcase their skill sets and technical
                prowess by presenting them events from model presentations,
                code-hunts to e-sports and technical workshops. Adhyaaya is
                considered to be a promising technical fest in Nagpur and an
                experience to be remembered. So mark your calendars! Adhyaaya 2021
                begins this 13th of May 2021. We appreciate your presence and our
                journey together.
                <br />
                <br />
                <strong> Adhyaaya: A Legacy of Infinite Chapters.</strong>
                <br />
                <br />
                <br />
              </p>
            </div>
            <button
            value="close"
              class="close"
              on:click|preventDefault="{_termspop3}"
            >
              Close
            </button>
          </div>
        </div>
      </div>
  
      <!-- Terms and Conditions   -->
      <div class="termspop" id="termspop">
        <div class="termspop_content tw-text-black">
          <h1>Terms and Conditions</h1>
          <ol type="A" style="text-align: left" class="t1111">
            <br /><br />
            The Terms and Conditions are as follows :
  
            <li>
              1. All proofs submitted by you should be genuine to the fullest
              extent of your knowledge.
            </li>
            <li>
              2. Certificates will only be provided on successful completion of
              the tenure.
            </li>
            <li>
              3. You are eligible for the certificate and other incentives only if
              your profile is complete.
            </li>
            <li>
              4. Adhyaaya, GCOEN holds the right to retract the Ambassadorship
              from you, or appoint additional ambassadors if your performance is
              unsatisfactory or if you violate any of the aforementioned terms and
              conditions.
            </li>
            <li>
              5. Any use, mention or placement of Adhyaaya or GCOE,Nagpur's logo
              or name (electronic or physical media) on any advertisement, event,
              notice, brochure, mailer or branding material will be done only
              after written approval from Adhyaaya and GCOE, Nagpur authorities
              and as per their norms. This policy applies in perpetuity.
            </li>
          </ol>
          <button
          value="close"
            class="close"
            on:click|preventDefault="{_termspop}"
          >
          Close
          </button>
        </div>
      </div>
  
      <!-- Privacy Policy -->
      <div class="termspop" id="termspop2">
        <div class="termspop_content tw-text-black">
          <h1>PRIVACY POLICY</h1>
          <ol type="A" style="text-align: left" class="t1111">
            <br /><br />
            You have given Adhyaaya, the permission to do the following:
  
            <li>
              1. By using our website, you hereby consent to our privacy policy
              and agree to its terms.
            </li>
            <li>
              2. Store and process the participants data (such as E-mail ID,
              photograph, contact number etc.) at each and every possible point
              for legitimate interests of Adhyaaya.
            </li>
            <li>
              3. Like any other website, Adhyaya’21 uses ‘cookies’. These cookies
              are used to store information including visitors’ preferences, and
              the pages on the website that the visitor accessed or visited. The
              information is used to optimize the users’ experience by customizing
              our web page content based on visitors’ browser type and/or other
              information.
            </li>
            <li>
              4. Adhyaaya has no access to control over the cookies that are used
              by the third-party advertisers.
            </li>
            <li>
              5. Adhyaaya will retain your personal information as long as it is
              necessary to do so for our legal obligations, resolve disputes, and
              enforce our policies.
            </li>
            <li>
              6. To send you promotional emails at any point of time within the
              working hours.
            </li>
            <li>
              7. In case of any mishaps, disputes and third party issues Adhyaaya
              will not be responsible for the same.
            </li>
          </ol>
          <button
          value="close"
          class="close"
            on:click|preventDefault="{_termspop2}"
          >
            Close
          </button>
        </div>
      </div>
    </div> 



<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
body{
    //background-color: #0f0c29;
}
li{  
    list-style: none;
}

.footer{
    padding: 5px 10px;
    //background-color: #080c2b;
}
.footer-sections{
    padding: 20px;
}
.logo{
    display: flex;
    align-items: center; 
    justify-content: center;
    flex-wrap: wrap;
    /* margin: 0 0 2rem 0; */
}
.logo img{
    image-rendering: optimizeSpeed;  
    width: 15%;
    height: 20%;
}
.footer-grid{
    display: grid;
    grid-template-columns: auto;
}
.footer-contents{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    color: white;
}
ul{
    margin: 10px 0;
}
.footer-map, iframe{
    border-radius: 10px;
    height: 320px;
    width: 450px;
}
.footer-contact a{
    text-decoration: none;
    color: white;
}
.footer-contact a:hover{
    color: aqua;
} 
.line{
    cursor: pointer;

}
.line::after{
    content: "";
    position: absolute;
    background-color: aqua;
    height: 3%;
    width: 0%;
    left: 0%;
    bottom: 69%;
    transition: all 400ms;
 
}
.line:hover::after{
    width: 100%;
}
.mail, .yt, .twitter, .linkedin, .insta{
    position: relative;
    transition: 500ms;
} 

.mail:hover, .yt:hover, .twitter:hover, .linkedin:hover, .insta:hover{
    transform: translate(20px,0px);
}

#icons-two{ 
    display: none;
    align-items: center;
    justify-content: space-around;
}
.mail-two i:hover, .yt-two i:hover, .twitter-two i:hover, .linkedin-two i:hover, .insta-two i:hover{
    color: aqua; 
} 
#icons-two a{
    color: white;
    text-decoration: none;
}
#icons-two a p{
    display: none;
}
.footer-contact{
    line-height: 6vh;
    position: relative;
}
.footer-contact i{
    padding: 0 16px 0 0 ;
}
#icons{
    display: block;
    line-height: 2rem;
    width: 18%;
}
.footer-contact ul{
    list-style-type: none;
}
.footer-map, .footer-contact{
    margin: 0 20px ;
}

.footer-bottom{
    display: flex;
    font-size: 18px;
    font-weight: 400;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: black;
    padding: .8rem 0;
    
}
.model-container{
    /* display: none; */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    opacity: 0  ;
    pointer-events: none;

}

.model-container.show{
    pointer-events: auto;
    opacity: 1;
}
.model{
    background-color: #fff;
    padding: 50px 30px;
    width: 600px;
    max-width: 100%;
} 
.model h1{
    margin: 0;
}
.model p{
    opacity: 0.7;
    font-size: 14px;
}


/* Contact Info */

.contact-info{
    margin: 0 auto 0 auto;
} 
.contact-content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 2rem 0 0 0 ;
}
.contact-info-img, .contact-info-content{
    margin: 2rem 1.5rem;
}
.contact-info-img img{
    width: 350px;
    height: 500px;
    padding: 20px 35px;
}
.contact-info-content{
    display: flex;
    flex-direction: column;
    padding: 5rem 0 0 0 ;
    text-align: left;
}
.contact-info-content a,i{
    text-decoration: none;
    color: white;
    padding-right: 10px;
}

.contact-one a:hover, .contact-two a:hover{
    color: aqua;
}


.reach-out{
    padding-bottom: 2rem;
}
.contact-one, .contact-two{
    margin: 1rem 0;
    line-height: 2rem;
}


@media screen and (max-width: 1432px){
    
    .logo img{ 
        width: 170px;
    }
    .footer-map{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 20px;
    }
    .footer-contact{
        font-size: 15px;
    }
    #icons{
        line-height: 2rem;
        font-size: 14.5px;
    }
}
@media (max-width: 1035px) and (min-width: 700px){
    .footer-contact{
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        font-size: 12px;
    }
    .logo img{
        width: 25vw;
        z-index: 1;
    }
    #icons{
        width: 22vw;
        line-height: 2rem;
        margin: 0;
        font-size: 13.7px;
    }
    /* .contact-info{
        margin: 10px;
    }  */
    .contact-info-content{
        padding: 0px;
        margin: 0px; 
    }
}
@media (max-width: 700px) and (min-width: 484px){

    .footer-map iframe{
        width: 430px;
    }
    .logo img{
        width: 35vw;
    }
    .footer-map{
        margin: 20px 20px 20px 5px;
    }
    .footer-contact{
        width: 40%;
    }
    #icons{
        width: 40%;
    }
}
@media (max-width: 484px) and (min-width: 200px){

    .footer-grid{ 
        display: block;
    }
    .logo img{ 
        width: 40vw;
    }
    .footer-contact{
        width: 100%; 
        margin: 2vh 15vw;
        text-align: center;
        font-size: 16px;
    }
    .footer-contact li{
        font-size: 18px;
    }
    .footer-map iframe{
        width: 75vw;
    }
    #icons{
        display: none;
    }
    #icons-two{
        display: flex;
        color: white;
        margin: 2vh;
        font-size: 24px;
    }
    .copyright{
        font-size: 16px;
    }
}

  
/* Popup code */
/**Terms and condition**/
.termspop {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);
    padding-top: 60px;
  }
  .termspop_content {
    background-color: #fefefe;
    padding: 10%;
    margin: 5% auto 15% auto;
    border: 1px solid #888;
    width: 80%;
    z-index: 13;
  }
  .termspop_content h1 {
    font-size: 2em;
    font-weight: bolder;
  }
  
  ol {
    padding-bottom: 60px;
  }
  .close {
    background-color: #04aa6d;
    color: white;
    padding: 14px 10px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 150px;
    border-radius: 15px;
  }
  .close:hover {
    opacity: 0.8;
  }
  .in3 a {
    text-decoration: none;
  }
  h4 a {
    text-decoration: none;
  }
  
  .termspop_content2 {
    background: #0f0c29;
    padding: 10%;
    margin: 5% auto 15% auto;
    border: 1px solid #888;
    width: 80%;
    z-index: 13;
    color: white;
  }
  
  .heading2 {
    color: #fff;
    text-align: center;
    font-size: 2em;
    font-weight: bolder;
  }
  
  .r123 {
    font-size: 1.8em;
    color: #fff;
    margin: 20px;
    font-weight: bolder;
  }
  
  .rowss p {
    color: #fff;
  }
  
  .rowss strong {
    font-size: 1.5em;
  }

  /* About us */
  .termspop_content3 {
    background: #0f0c29;
    padding: 10%;
    margin: 5% auto 15% auto;
    border: 1px solid #888;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 13;
  }
  
  .heading3 {
    color: #fff;
    text-align: center;
    font-size: 2.2em;
    font-weight: bolder;
    margin-bottom: 40px;
  }
  .our-team {
    text-align: center;
    transition: all 0.5s ease 0s;
    width: 300px;
    padding: 30px;
    margin-bottom: 40px;
  }
  .our-team:hover {
    /* box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.5), 0 1px 4px rgba(0, 0, 0, 0.3),
      0 0 40px rgba(0, 0, 0, 0.1) inset; */
    background-color: #0f0c29;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4, 0 0 5px #03e9f4, 0 0 5px #03e9f4, 0 0 5px #03e9f4;
    cursor: pointer;
  }
  .our-team .pic {
    overflow: hidden;
    position: relative;
  }
  /* .our-team .pic:before,
  .our-team .pic:after {
    content: "";
    width: 200%;
    height: 80%;
    background: rgba(38, 37, 37, 0.8);
    position: absolute;
    top: -100%;
    left: -4%;
    transform: rotate(45deg);
    transition: all 0.5s ease 0s;
  }
  .our-team .pic:after {
    background: rgba(253, 253, 253, 0.8);
    top: auto;
    left: auto;
    bottom: -100%;
    right: -4%;
  }
  .our-team:hover .pic:before {
    top: 0;
  }
  .our-team:hover .pic:after {
    bottom: 0;
  } */
  .our-team .pic img {
    width: 100%;
    height: auto;
  }
  .our-team .social {
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    position: absolute;
    bottom: 45%;
    left: 0;
    opacity: 0;
    z-index: 2;
    transition: all 0.5s ease 0.3s;
}
.our-team:hover .social {
    opacity: 1;
  }
  .our-team .social li {
    display: inline-block;
  }
  .our-team .social li a {
    display: block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    color: #fff;
    margin-right: 10px;
    position: relative;
    transition: all 0.3s ease 0s;
  }
  .social55 {
    display: none;
  }
  .our-team .social li a:after {
    content: "";
    width: 100%;
    height: 100%;
    background: #ff1f01;
    border-radius: 0 20px 20px 20px;
    position: absolute;
    top: 100px;
    left: 0;
    z-index: -1;
    transition: all 0.3s ease 0s;
  }
  .our-team .social li a:hover:after {
    transform: rotate(180deg);
  }
  .our-team .team-content {
    padding: 20px;
  }
  .our-team .title {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 2px;
    color: #09a89b;
    text-transform: uppercase;
    margin-bottom: 7px;
  }
  .our-team .post {
    display: block;
    font-size: 17px;
    font-weight: 600;
    color: #707070;
    text-transform: capitalize;
  }
  
  #so123 {
    position: absolute;
    bottom: -92px;
    left: 7px; 
    font-size: 1.2em;
  }
  
  @media only screen and (max-width: 990px) {
    .our-team {
      margin-bottom: 30px;
    }
    .contact-info-content{
        padding: 0px;
        margin: 0px; 
    }
    .contact-info-img{
        margin: 0;
    }
  } 

/* Trailer */

.adh-trailer{
    padding: 0;
    margin: 0;  
    //background-color: #0f0c29;
    color: white;
    /* height: 100vh; */
}
.adh-trailer-heading{
    text-align: center;
    margin: 2rem;
}
.adh-video{
    text-align: center;
    position: relative;
    margin: 0 0 2rem 0;
}
.adh-video iframe{
    /* border: 2px solid red; */
    width: 606px;
    height: 353px;
    padding: 1rem 2rem;
}
.trailer-footer{
    height: 100vh;
}

/*Injected Styles*/
h1 { 
  @apply tw-text-3xl
}
</style>