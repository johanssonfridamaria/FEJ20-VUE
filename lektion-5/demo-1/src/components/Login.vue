<template>
  <!-- Default form login -->
<form class="text-center border border-default p-5" action="#!">

    <p class="h4 mb-4">Sign in</p>

    <!-- Email -->
    <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail">

    <!-- Password -->
    <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password">

    <div class="d-flex justify-content-around">
        <div>
            <!-- Remember me -->
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember">
                <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
            </div>
        </div>
        <div>
            <!-- Forgot password -->
            <a href="">Forgot password?</a>
        </div>
    </div>

    <!-- Sign in button -->
    <button class="btn btn-default btn-block my-4" type="submit">Sign in</button>

    <!-- Register -->
    <p>Not a member?
        <a href="">Register</a>
    </p>

    <!-- Social login -->
    <p>or sign in with:</p>

    <a href="#" class="mx-2" role="button"><i class="fab fa-facebook-f text-default"></i></a>
    <a href="#" class="mx-2" role="button"><i class="fab fa-twitter text-default"></i></a>
    <a href="#" class="mx-2" role="button"><i class="fab fa-linkedin-in text-default"></i></a>
    <a href="#" class="mx-2" role="button"><i class="fab fa-github text-default"></i></a>

</form>
<!-- Default form login -->
</template>

<script>
export default {
    name: 'Login'

}
</script>

<style>

</style>