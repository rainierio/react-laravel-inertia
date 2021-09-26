<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class customAuth extends Controller
{
    public function logoutUser(Request $request)
    {
        //Auth::logout();
        //$request->session()->invalidate();
        //$request->session()->regenerateToken();
        return Inertia::render('/users');
    }
}
