import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit, MoreHorizontal } from 'lucide-react'

const CompaniesTable = () => {
  return (
    <div>
        <Table>
            <TableCaption>
                A list of your recent register Companies.
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Logo</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableCell>
                    <Avatar>
                    <AvatarImage src="https://www.transparentpng.com/thumb/google-logo/google-logo-png-icon-free-download-SUF63j.png" />
                    </Avatar>
                </TableCell>
                <TableCell>
                    Google
                </TableCell>
                <TableCell>
                    14-11-2024
                </TableCell>
                <TableCell className='text-right cursor-pointer'>
                    <Popover>
                        <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                        <PopoverContent className="w-32">
                            <div className='flex items-center gap-2 w-fit cursor-pointer'>
                                <Edit className='w-4'/>
                                <span>Edit</span>
                            </div>
                        </PopoverContent>
                    </Popover>
                </TableCell>
            </TableBody>
        </Table>
    </div>
  )
}

export default CompaniesTable