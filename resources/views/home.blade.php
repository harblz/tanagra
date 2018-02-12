@extends('layouts.app')

@section('content')

<tanagra-home 	:edit-mode="editMode" 
				:layout.sync="layout"
				:toggle-save-layout-button.sync="toggleSaveLayoutButton"
				:reset-layout.sync="resetLayout"
				:new-layout.sync="newLayout">
</tanagra-home>

@endsection
