import React, { useState } from 'react'

export default function ExerciseCard({ exercise, i }) {
    const [completedSets, setCompletedSets] = useState(0)

    const handleSetComplete = () => {
        if (completedSets < exercise.reps) {
            setCompletedSets(completedSets + 1)
        }
    }    

    const handleResetSets = () => {
        setCompletedSets(0)
    }

    return (
        <div className='bg-slate-950 border border-blue-400 rounded-lg p-4'>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-between'>
                    <h3 className='text-lg font-medium'>{exercise.name}</h3>
                    <span className='text-blue-400'>#{i + 1}</span>
                </div>
                
                <div className='flex flex-col gap-2'>
                    <p className='text-sm text-slate-400'>{exercise.description}</p>
                    
                    {exercise.cues && (
                        <ul className='list-disc list-inside text-sm'>
                            {exercise.cues.map((cue, index) => (
                                <li key={index}>{cue}</li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className='flex flex-col gap-3 text-sm border-t border-blue-400/30 pt-3'>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-4'>
                            <div>
                                <span className='text-slate-400'>组数: </span>
                                <span>{exercise.reps}</span>
                            </div>
                            <div>
                                <span className='text-slate-400'>完成组数: </span>
                                <span className='text-blue-400'>{completedSets}/{exercise.reps}</span>
                            </div>
                            <div>
                                <span className='text-slate-400'>次数: </span>
                                <span>{exercise.reps}</span>
                            </div>
                            {exercise.tempo && (
                                <div>
                                    <span className='text-slate-400'>节奏: </span>
                                    <span>{exercise.tempo}</span>
                                </div>
                            )}
                        </div>
                        
                        <div className='flex gap-2'>
                            <button 
                                onClick={handleSetComplete}
                                disabled={completedSets >= exercise.sets}
                                className={`px-3 py-1 rounded border border-blue-400 
                                    ${completedSets >= exercise.sets 
                                        ? 'opacity-50 cursor-not-allowed' 
                                        : 'hover:bg-blue-400/10'}`}
                            >
                                完成组数
                            </button>
                            <button 
                                onClick={handleResetSets}
                                className='px-3 py-1 rounded border border-red-400 hover:bg-red-400/10'
                            >
                                重置
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
