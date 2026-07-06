import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('portfolio');
        const projects = await db
            .collection('projects')
            .find({})
            .sort({ createdAt: -1 })
            .toArray();

        return NextResponse.json({ success: true, projects });
    } catch (error) {
        console.error('Get projects error:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to fetch projects' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    const sessionCookie = request.cookies.get('admin_session')?.value;
    const validToken = process.env.ADMIN_SESSION_TOKEN;

    if (sessionCookie !== validToken) {
        return NextResponse.json(
            { success: false, message: 'Unauthorized' },
            { status: 401 }
        );
    }

    try {
        const body = await request.json();
        const { title, description, tech, liveLink, githubLink, previewImage } = body;

        if (!title || !description) {
            return NextResponse.json(
                { success: false, message: 'Title and description are required' },
                { status: 400 }
            );
        }

        const client = await clientPromise;
        const db = client.db('portfolio');

        const newProject = {
            title,
            description,
            tech: Array.isArray(tech) ? tech : tech.split(',').map((t: string) => t.trim()),
            liveLink: liveLink || '',
            githubLink: githubLink || '',
            previewImage: previewImage || '',
            createdAt: new Date(),
        };

        const result = await db.collection('projects').insertOne(newProject);

        return NextResponse.json({ success: true, insertedId: result.insertedId });
    } catch (error) {
        console.error('Add project error:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to add project' },
            { status: 500 }
        );
    }

    
}
