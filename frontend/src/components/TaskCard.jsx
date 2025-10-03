import { Card } from './ui/card'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { CheckCircle2, Trash2 } from 'lucide-react'
import { Circle } from 'lucide-react'
import { Input } from './ui/input'
import { Calendar } from 'lucide-react'
import { PenSquare } from 'lucide-react'

const TaskCard = ({ task, index }) => {
    let isEditting = false;

    return (
        <Card
            className={cn(
                "p-4 bg-gradient-card border-0 shadow-customer-md transition-all group",
                task.status === "complete" && "opacity-75"
            )}
            style={{
                animationDelay: `${index * 50}ms`
            }}
        >
            <div className='flex items-center gap-4'>
                <Button
                    variant='ghost'
                    size='icon'
                    className={cn(
                        "flex-shrink-0 size-8 rounded-full transition-all duration-200",
                        task.status === "complete"
                            ? "text-success hover:text-success/80"
                            : "text-muted-foreground hover:text-muted-foreground/80"
                    )}
                >
                    {task.status === "complete"
                        ? <CheckCircle2 className='size-5' />
                        : <Circle className='size-5' />}
                </Button>

                <div className='flex-1 min-w-0'>
                    {isEditting ? (
                        <Input
                            placeholder="Cần phải làm gì?"
                            className="h-12 text-base border bg-slate-50"
                            type="text"
                        />
                    ) : (
                        <p className={cn(
                            "text-base transition-all duration-200",
                            task.status === "complete"
                                ? "line-through text-muted-foreground"
                                : "text-foreground"
                        )}>
                            {task.title}
                        </p>
                    )}
                    <div className='flex items-center justify-between gap-2 mt-1'>
                        <Calendar className="size-3 text-muted-foreground" />
                        <span className='text-muted-foreground'>
                            {new Date(task.createdAt).toLocaleDateString()}
                        </span>
                        {task.completedAt && (
                            <>
                                <span className='text-muted-foreground'>-</span>
                                <Calendar className="size-3 text-muted-foreground" />
                                <span className='text-muted-foreground'>
                                    {new Date(task.completedAt).toLocaleDateString()}
                                </span>
                            </>
                        )}
                    </div>
                </div>
            </div>



            <div className='hidden gap-2 group-hover:flex animate-slide-up'>
                <Button
                    variant="ghost"
                    size="icon"
                    className="flex-shrink-0 transition-colors size-8 text-muted-foreground hover:text-muted-foreground/80"
                >
                    <PenSquare className="size-4" />
                </Button>
            </div>

            <Button
                variant="ghost"
                size="icon"
                className="flex-shrink-0 transition-colors size-8 text-muted-foreground hover:text-muted-foreground/80"
            >
                <Trash2 className="size-4" />
            </Button>
        </Card>
    )
}
export default TaskCard

// import