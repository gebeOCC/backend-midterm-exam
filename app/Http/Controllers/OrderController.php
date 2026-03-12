<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    public function index()
    {
        return Order::all();
    }

    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'title' => 'required|string|max:255',
                'description' => 'nullable|string',
                'priority' => 'nullable|in:low,medium,high,urgent',
            ],
            [
                'title.required' => 'The task title is required.',
                'title.max' => 'The task title cannot be longer than 255 characters.',
                'priority.in' => 'Invalid priority. Allowed values: low, medium, high, urgent.',
            ]
        );

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 422);
        }

        Order::create($validator->validated());

        return response()->json([
            'message' => 'Order created successfully'
        ], 201);
    }

    public function show($id)
    {
        $order = Order::find($id);

        if (!$order) {
            return response()->json([
                'message' => 'Order not found'
            ], 404);
        }

        return response()->json($order, 200);
    }

    public function update($id, Request $request)
    {
        $order = Order::find($id);

        if (!$order) {
            return response()->json([
                'message' => 'Order not found'
            ], 404);
        }

        $validator = Validator::make(
            $request->all(),
            [
                'title' => 'required|string|max:255',
                'description' => 'nullable|string',
                'priority' => 'nullable|in:low,medium,high,urgent',
            ],
            [
                'title.required' => 'The task title is required.',
                'title.max' => 'The task title cannot exceed 255 characters.',
                'priority.in' => 'Invalid priority. Allowed values: low, medium, high, urgent.',
            ]
        );

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 422);
        }

        $order->update($validator->validated());

        return response()->json([
            'message' => 'Order updated successfully',
            'order' => $order
        ], 200);
    }

    public function destroy($id)
    {
        $order = Order::find($id);

        if (!$order) {
            return response()->json([
                'message' => 'Order not found'
            ], 404);
        }

        $order->delete();

        return response()->json([
            'message' => 'Order deleted successfully'
        ], 200);
    }
}
