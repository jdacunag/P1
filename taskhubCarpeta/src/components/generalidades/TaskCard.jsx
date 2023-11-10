import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

function TaskCard({ task, id }) {
    if (task === null) {
        return null;
    }

    return (
        <div class="flex flex-col bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 p-4 rounded-xl text-white w-8/12 mx-auto my-auto">
            <div>
                <span class="text-xs">{task.nombre}</span>
            </div>
            <div>
                <p class="text-xl font-bold mt-3 mb-5">{task.description}</p>
            </div>
            <div class="text-xs mb-2">5/12 Task Completed</div>
            <div class="w-full bg-gray-400 p-0">
                <div class="w-1/12 bg-white h-1"></div>
            </div>
        </div>
    );
}

export default TaskCard;
