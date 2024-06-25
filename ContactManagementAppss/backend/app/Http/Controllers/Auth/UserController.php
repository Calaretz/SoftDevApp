<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    /**
     * Update the authenticated user's profile.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {
        // Retrieve the currently authenticated user
        $user = Auth::user();
        
        // Log the user data before update
        Log::info('User before update: ', $user->toArray());

        // Validate the request data
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
        ]);

        // Update user attributes
        $user->name = $request->name;
        $user->email = $request->email;
        
        // Log the user data after update but before save
        Log::info('User after update: ', $user->toArray());

        // Save the updated user data to the database
        $user->save();

        // Log the user data after saving to the database
        Log::info('User after save: ', $user->toArray());

        // Return a JSON response indicating success
        return response()->json(['message' => 'Profile updated successfully', 'user' => $user], 200);
    }
}
