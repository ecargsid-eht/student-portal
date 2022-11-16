<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $req){
        $validated = Validator::make($req->all(),[
            'name' => 'required',
            'contact' => 'required|unique:users|digits:10',
            'email' => 'required|unique:users|email',
            'password' => 'required'
        ]);

        if($validated->fails()){
            return response()->json($validated->errors(),404);
        }
        else{
            $user = new User();
            $user->name = $req->name;
            $user->contact = $req->contact;
            $user->email = $req->email;
            $user->password = Hash::make($req->password);
            $user->save();

            return response()->json($user,200);

        }
    }

    public function login(Request $req){
        $validated = Validator::make($req->all(),[
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if($validated->fails()){
            return response()->json($validated->errors(),404);
        }
        else{
            if(Auth::attempt($req->all())){
                return response()->json(Auth::user(),200);
            }
            else{
                return response()->json(["error"=>"incorrect"],404);
            }

        }
    }
     
}
