@extends ('layouts.app')

@section('content')
<main class="container" style="height: 100%; margin-top: 7%;">
    <tanagra-welcome :login-status="loginStatus"></tanagra-welcome>
</main>
@endsection