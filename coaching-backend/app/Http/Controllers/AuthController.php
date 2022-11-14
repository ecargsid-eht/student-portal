<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class AuthController extends Controller
{
     public function register(Request $req){
         $data = $req->validate([
            'name' =>'required',
            'email' =>'required',
            'contact' =>'required',
            'password' =>'required',
         ]);
         User::create($data);
         return response()->json($data,200) ;
     }
}
