<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name', 'Sacred Space Tallahassee') }}</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">


    <!-- Favicon !-->
    <link rel="icon" href="/img/favicon/favicon.ico">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <script>
      var Tanagra =  {
        csrfToken: "{{ csrf_token() }}",
      };
    </script>

    <!-- App Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app" style="height: 100%; width: 100%;">
        <tanagra-nav    :login-status="loginStatus" 
                        :user="user" 
                        :edit-mode.sync="editMode"
                        :toggle-save-layout-button.sync="toggleSaveLayoutButton"
                        >
        </tanagra-nav>

        @yield('content')
    </div>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
