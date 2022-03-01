<center><h1 class="tw-mb-10 tw-text-5xl">Testimonials</h1></center>
<div class="testimonial">
    <div class="pic">
        <img src="/index_feedbacks/1.jpg" alt="Profile for speaker" />
    </div>
    <div class="testimonial-content">
        <p>
            GCOE Nagpur Model United Nations 2021, was a very memorable conference in my MUN Career.
            Being able to participate as the delegate of Slovakia (UNHRC) was indeed an amazing
            experience. The Secretariat, Organizing Committee and the Executive Board Members did an
            stellar performance to accommodate the needs and requests of the delegates. Further,
            this conference will always have special place in my heart (not beacause, I won the Best
            Delegate), but because of the hospitality, it had towards its participants. Last but not
            the least, I would like to congratulate the team for the amazing display of debate, and
            diplomacy. Wishing you, all the best for upcoming editions of the Conference. - Mr Domil
            Antony Johnson Pro Munner, Assistant Director Harvard Model United Nations China and
            Dubai 2021!
        </p>
    </div>
    <h3 class="testimonial-title">
        <a sveltekit:prefetch href="#">Domil Antony Johnson</a>
        <p style="font-size: smaller;">
            Pro Munner, Assistant Director Harvard Model United Nations China and Dubai 2021!
        </p>
    </h3>
</div>

<style lang="scss">
    /* body{ 
    margin-top: 30px !important;
    background-color:#F2EFE8 !important;
}
*/
    h3,
    p {
        margin: 0 !important;
    }
    center h1 {
        padding: 20px;
    }
    a:hover,
    a:focus {
        text-decoration: none !important;
        outline: none !important;
    }
    .testimonial {
        text-align: center;
        color: #f2efe8;
        margin: 80px 30px;
        padding: 30px 40px;
        border-radius: 30px;
        position: relative;
        z-index: 1;
        width: 50vw;
        margin: auto;
        /* margin-top: 20vh; */
    }
    .testimonial:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        // background-color: #424242;
        border-radius: 30px;
        z-index: -1;
        @apply tw-bg-base-200;
    }
    .testimonial:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* background-color: #fb8c00; */
        border-radius: 30px;
        transform: rotate(-7deg);
        z-index: -2;
        @apply tw-hidden tw-overflow-clip tw-bg-base-100 md:tw-block;
    }
    .testimonial .pic {
        //border: 5px solid #f2efe8;
        display: inline-block;
        margin-bottom: 10px;
        width: 200px;
        height: 200px;
        border-radius: 100%;
        @apply tw-border-4 tw-border-solid tw-border-yellow-300;
    }
    .testimonial .pic img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
    .testimonial .testimonial-content {
        font-size: 15px;
        letter-spacing: 1px;
        line-height: 30px;
        margin-bottom: 20px;
    }
    .testimonial .testimonial-title a {
        display: inline-block;
        //color: #fb8c00;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
        @apply tw-text-accent;
    }
    .testimonial .testimonial-title small {
        color: #f2efe8;
        font-size: 15px;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: capitalize;
    }
    @media only screen and (max-width: 1200px) {
        .testimonial {
            width: 80vw;
        }
    }
</style>
