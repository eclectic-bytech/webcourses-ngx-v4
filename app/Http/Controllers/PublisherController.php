<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Publisher;
use App\Models\UserRole;

class PublisherController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $uidInt = (int)$id;
        if ($uidInt != 0)
        {
            return Publisher::where('owner_uid', $uidInt)
                ->sole();
        }
        else
        {
            return Publisher::where('id_alias', $id)
                ->sole();
        }
    }

    public function request_access()
    {
        $uid = auth()->user()->id;

        // Role #5 is added to user when they confirm wanting publisher access
        if (UserRole::where('user_id', $uid )->where('role_id', 5)->doesntExist()) {
            $user_role = new UserRole();
            $user_role->user_id = $uid;
            $user_role->role_id = 5;
            $user_role->save();
        }
        UserRole::where('user_id', $uid )->where('role_id', 4)->delete();
    }

    public function interest_expressed()
    {
        $uid = auth()->user()->id;

        // Role #4 is added to user when they click Become a publisher menu item
        if (UserRole::where('user_id', $uid )->where('role_id', 4)->doesntExist()) {
            $user_role = new UserRole();
            $user_role->user_id = $uid;
            $user_role->role_id = 4;
            $user_role->save();
        }
    }

    public function builder_sub()
    {
        $uid = auth()->user()->id;
        $role_id = 6;

        if (UserRole::where('user_id', $uid )->where('role_id', $role_id)->doesntExist()) {
            $user_role = new UserRole();
            $user_role->user_id = $uid;
            $user_role->role_id = $role_id;
            $user_role->save();
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
