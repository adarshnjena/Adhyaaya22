<script>
    import { onMount } from 'svelte';
    import { dev } from '$app/env';
    import { getApp, initializeApp } from 'firebase/app';
    import firebaseConfig from '$lib/firebase/firebaseConfig';
    import { goto } from '$app/navigation';
    import { authentication_message } from '$lib/messageStore';
    let app;
    // Init firebase and generate the required app.
    onMount(() => {
        try {
            app = getApp();
        } catch (error) {
            dev ? console.log(error) : '';
            // This means the app is not yet intialized.
            app = initializeApp(firebaseConfig);
        }
        // Now we for sure have an app.

        dev ? console.log(app) : '';

    });
</script>

<div class="parent-container">
    <div class="container">
        <!--<h1>only one step away!</h1>
        <p>
            Click the button below to login/register and associate yourself with the 4th edition of
            Adhyaaya, GCOE Nagpur. Who knows, you might even get rewards!
        </p> -->
        <h1>Coming Soon!</h1>
        <p>We are working hard to bring you the best experience. Stay tuned!</p>

        <button
            class="tw-hidden"
            on:click="{() => {
                $authentication_message = 'Plese register below';
                goto('/auth/login');
            }}"
        >
            Register
        </button>
        <!--
        <p>Sign in with UserID and Name</p>

        <form action="">
            <div class="input">
                <input type="text" placeholder="UserId" />
            </div>
            <div class="input">
                <input type="password" name="" id="" placeholder="Password" />
            </div>
            <button type="submit">Submit</button>
        </form>
        -->
    </div>
</div>

<style lang="scss">
    //body,
    * {
        margin: 0;
        padding: 0;
    }

    :global {
        html {
            scroll-behavior: smooth;
            cursor: url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='24px' height='24px' viewBox='0 0 512 512' style='enable-background:new 0 0 512.011 512.011;' xml:space='preserve'%3E %3Cpath fill='DeepSkyBlue' d='M434.215,344.467L92.881,3.134c-4.16-4.171-10.914-4.179-15.085-0.019  c-2.011,2.006-3.139,4.731-3.134,7.571v490.667c0.003,4.382,2.685,8.316,6.763,9.92c4.081,1.603,8.727,0.545,11.712-2.667  l135.509-145.92h198.016c5.891,0.011,10.675-4.757,10.686-10.648C437.353,349.198,436.226,346.473,434.215,344.467z'/%3E %3C/svg%3E"),
                pointer;
        }
    }

    div.parent-container {
        height: 100vh;
        max-width: 100vw;
        background: url('/register_bg.png') no-repeat center;
        background-size: cover;
        background-position: center;
    }

    @media (max-width: 1300px) {
        div.parent-container {
            background: url('/register_bg.png') no-repeat center;
        }
    }
    .container {
        padding-left: 50px;
        position: absolute;
        top: 105px;
        left: 20rem;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-items: flex-start;
        width: 600px;
    }

    h1,
    button,
    p {
        margin-bottom: 40px;
        color: #fff;
    }
    h1 {
        text-align: left;
        font-size: 45px;
        font-weight: 800;
        font-family: 'Roboto', sans-serif;
        text-transform: uppercase;
        color: aqua;
    }

    p {
        font-size: 25px;
        /* font-family: 'Open Sans', sans-serif; */
        font-family: 'Poppins', sans-serif;
    }

    button {
        padding: 15px;
        width: 300px;
        font-size: 30px;
        border-radius: 15px;
        color: aqua;
        background-color: transparent;
        border: 3px solid aqua;
        cursor: pointer;
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
    }

    button:hover {
        box-shadow: inset 0 0 0.2em 0 aqua, 0 0 0.4em 0 aqua;
    }
    form {
        display: flex;
        flex-direction: column;
        outline: none;
    }
    input {
        width: 300px;
        padding: 10px;
        margin-bottom: 15px;
        border: 2px solid aqua;
        line-height: 30px;

        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        background: transparent;
        border-radius: 10px;

        color: #fff;
    }
    input:hover {
        box-shadow: inset 0 0 0.2em 0 aqua, 0 0 0.4em 0 aqua;
    }

    @media (max-width: 1300px) {
        .container {
            top: 200px;
            left: 10rem;
        }
    }

    @media (max-width: 900px) {
        .container {
            top: 200px;
            left: 2rem;
        }
    }

    @media (max-width: 700px) {
        .container {
            top: 100px;
            width: 25rem;
        }
    }
    @media (max-width: 530px) {
        .container {
            width: 18rem;

            left: 0.7rem;
        }
    }
</style>
