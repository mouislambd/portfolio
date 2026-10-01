export const revalidate = 0;
export const dynamic = 'force-dynamic';

import Projects from '@/components/Projects';

export default function ProjectsPage() {
    return (
        <main>
            <Projects />
        </main>
    );
}