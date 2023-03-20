<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
class LocationController extends Controller
{
    public function index(Request $request)
    {
            $userIp = $request->ip();
            $locationData = \Location::get($userIp);

            dd($locationData);
    }
}
