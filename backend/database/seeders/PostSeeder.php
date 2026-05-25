<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Post;

class PostSeeder extends Seeder
{
    public function run(): void
    {
        $posts = [
            // B. Email
            [
                'title'       => 'Email as a Written Business Communication Tool',
                'slug'        => 'email-communication',
                'description' => 'Ethics, structure, and usage of email as a professional business communication tool.',
                'content'     => '
<p class="mb-4">Email is one of the most commonly used tools of written business communication. It allows information to be exchanged quickly across locations and automatically documented.</p>

<h3 class="text-xl font-bold mt-6 mb-3">Functions of Email in Business</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
    <li>Delivering information or instructions</li>
    <li>Sending document attachments</li>
    <li>Providing confirmation or follow-up</li>
    <li>Building communication across divisions or organizations</li>
</ul>

<h3 class="text-xl font-bold mt-6 mb-3">Advantages of Email</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
    <li>Fast and efficient</li>
    <li>Can be sent to many recipients at once</li>
    <li>Easy to archive</li>
</ul>

<h3 class="text-xl font-bold mt-6 mb-3">Weaknesses of Email</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
    <li>Prone to misunderstanding because there is no tone of voice</li>
    <li>Can be ignored if the subject line is unclear</li>
    <li>Information overload if not managed properly</li>
</ul>

<h3 class="text-xl font-bold mt-6 mb-3">Business Email Writing Etiquette</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
    <li>Use a professional email address</li>
    <li>Write a specific and informative subject line</li>
    <li>Begin with an appropriate greeting</li>
    <li>Use formal language without sounding rigid</li>
    <li>End with a closing and complete signature</li>
</ul>

<h3 class="text-xl font-bold mt-6 mb-3">Professional Email Structure</h3>
<ol class="list-decimal pl-6 mb-4 space-y-2">
    <li><strong>Subject:</strong> brief and straight to the point</li>
    <li><strong>Opening greeting</strong></li>
    <li><strong>Opening paragraph:</strong> message context</li>
    <li><strong>Main body:</strong> information or request</li>
    <li><strong>Closing:</strong> expected follow-up</li>
    <li><strong>Closing salutation and signature</strong></li>
</ol>

<h3 class="text-xl font-bold mt-8 mb-4">Practical Example</h3>
<div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4 font-mono text-sm leading-relaxed text-gray-800">
    <p class="font-bold mb-2">Subject: Project Presentation Schedule Confirmation – May 20, 2026</p>
    <p class="mb-3">Dear Mr. Reza Pratama,</p>
    <p class="mb-3">I would like to confirm that the application development project presentation is scheduled for <strong>Tuesday, May 20, 2026, at 10.00 a.m. WIB</strong> in the third-floor meeting room.</p>
    <p class="mb-3">Please confirm your attendance no later than Monday, May 19, 2026.</p>
    <p class="mb-3">Thank you for your attention.</p>
    <p class="mb-1">Sincerely,</p>
    <p class="font-semibold">Dinda Maharani</p>
    <p>Project Staff, PT Maju Bersama</p>
    <p class="text-blue-600">dinda@majubersama.co.id</p>
</div>
',
                'image_url'   => '/images/email.png',
            ],

            // C. Effective Business Writing
            [
                'title'       => 'How to Create Effective Business Writing',
                'slug'        => 'effective-business-writing',
                'description' => 'Basic principles of business writing: concise, clear, accurate, and polite.',
                'content'     => '
<p class="mb-4">Effective business writing does not mean long writing filled with jargon. In fact, the opposite is true. The shorter and clearer the writing, the easier it is to understand.</p>

<h3 class="text-xl font-bold mt-6 mb-3">Basic Principles of Effective Business Writing</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
    <li><strong>Clarity:</strong> Avoid ambiguous words. Express one idea in one sentence.</li>
    <li><strong>Conciseness:</strong> Use as few words as possible without sacrificing meaning.</li>
    <li><strong>Correctness:</strong> Make sure facts, data, and grammar are correct before sending.</li>
    <li><strong>Courtesy:</strong> Maintain a polite tone that respects the reader.</li>
    <li><strong>Completeness:</strong> Ensure that all required information is included.</li>
</ul>

<h3 class="text-xl font-bold mt-6 mb-3">Practical Tips</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
    <li>Write for the reader, not for yourself</li>
    <li>Use active sentences</li>
    <li>Avoid uncommon acronyms</li>
    <li>Review before sending</li>
    <li>Adjust the language style to the audience: formal for superiors and slightly more relaxed for colleagues</li>
</ul>
',
                'image_url'   => '/images/writing.png',
            ],

            // D. Memo
            [
                'title'       => 'Memo: Concise Internal Communication',
                'slug'        => 'memo',
                'description' => 'Understand the characteristics, usage, and structure of memos for direct internal organizational messages.',
                'content'     => '
<p class="mb-4">A memo is a short written message used for internal communication within an organization. Memos are usually sent from one department to another, or from superiors to subordinates.</p>

<h3 class="text-xl font-bold mt-6 mb-3">Characteristics of a Memo</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
    <li>Brief and directly focused on the issue</li>
    <li>Does not use formal greetings like a letter</li>
    <li>Focuses on one specific topic</li>
</ul>

<h3 class="text-xl font-bold mt-6 mb-3">When a Memo Is Used</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
    <li>Announcing policy changes</li>
    <li>Giving instructions or reminders</li>
    <li>Delivering internal information that needs to be distributed</li>
</ul>

<h3 class="text-xl font-bold mt-6 mb-3">Memo Structure</h3>
<ol class="list-decimal pl-6 mb-4 space-y-2">
    <li><strong>Header:</strong> To, From, Date, Subject</li>
    <li><strong>Body:</strong> brief and clear explanation</li>
    <li><strong>Follow-up:</strong> what the recipient needs to do, if any</li>
</ol>

<h3 class="text-xl font-bold mt-8 mb-4">Practical Example</h3>
<div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4 text-sm leading-relaxed text-gray-800">
    <p class="text-center font-bold text-base mb-4 tracking-widest uppercase">Internal Memo</p>
    <div class="grid grid-cols-[auto,1fr] gap-x-4 gap-y-1 mb-4">
        <span class="font-semibold">To</span><span>: All Marketing Division Staff</span>
        <span class="font-semibold">From</span><span>: Head of Marketing Division</span>
        <span class="font-semibold">Date</span><span>: May 16, 2026</span>
        <span class="font-semibold">Subject</span><span>: Monthly Report Submission</span>
    </div>
    <p>All staff are requested to submit the April 2026 monthly performance report no later than <strong>Friday, May 22, 2026, at 5.00 p.m. WIB</strong> to the division head&apos;s email.</p>
    <p class="mt-3 italic text-gray-600">Late reports will not be processed in this month&apos;s evaluation cycle.</p>
</div>
',
                'image_url'   => '/images/memo.png',
            ],

            // E. Business Letter
            [
                'title'       => 'Business Letters: Formal External Communication',
                'slug'        => 'business-letter',
                'description' => 'A guide to compiling formal business letters for external communication with partners, clients, and agencies.',
                'content'     => '
<p class="mb-4">A business letter is a formal document used to communicate with parties outside the organization, such as partners, clients, government agencies, or suppliers.</p>

<h3 class="text-xl font-bold mt-6 mb-3">Differences Between Business Letters, Emails, and Memos</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
    <li><strong>Business letters</strong> are more formal and are usually printed on official letterhead</li>
    <li><strong>Email</strong> is faster and more flexible</li>
    <li><strong>Memos</strong> are only for internal organizational communication</li>
</ul>

<h3 class="text-xl font-bold mt-6 mb-3">Types of Business Letters</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
    <li>Offer letter</li>
    <li>Collaboration request letter</li>
    <li>Order confirmation letter</li>
    <li>Complaint letter</li>
    <li>Recommendation letter</li>
</ul>

<h3 class="text-xl font-bold mt-6 mb-3">Business Letter Structure</h3>
<ol class="list-decimal pl-6 mb-4 space-y-2">
    <li><strong>Letterhead:</strong> company name, address, and contact information</li>
    <li><strong>Date</strong></li>
    <li><strong>Recipient address</strong></li>
    <li><strong>Opening greeting</strong></li>
    <li><strong>Opening paragraph:</strong> purpose of the letter</li>
    <li><strong>Main body</strong></li>
    <li><strong>Closing paragraph:</strong> follow-up</li>
    <li><strong>Closing salutation</strong></li>
    <li><strong>Signature and job title</strong></li>
</ol>

<h3 class="text-xl font-bold mt-8 mb-4">Practical Example</h3>
<div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4 text-sm leading-relaxed text-gray-800">
    <div class="font-bold text-center mb-1">PT Maju Bersama</div>
    <div class="text-center text-gray-500 mb-4">Jl. Sudirman No. 45, South Jakarta &bull; Tel. 021-5678910</div>
    <p class="mb-3">Jakarta, May 16, 2026</p>
    <p class="mb-1">To:</p>
    <p class="mb-1 font-semibold">Director of PT Cahaya Nusantara</p>
    <p class="mb-4">Jl. Gatot Subroto No. 12, Bandung</p>
    <p class="mb-3">Dear Sir/Madam,</p>
    <p class="mb-3">We would like to submit a proposal for cooperation in distributing household electronic products in the West Java region. The details of the offer are attached to this document.</p>
    <p class="mb-4">We hope to discuss this further in a meeting that can be scheduled at your convenience.</p>
    <p class="mb-1">Sincerely,</p>
    <p class="font-semibold">Ahmad Fauzi</p>
    <p>Director of PT Maju Bersama</p>
</div>
',
                'image_url'   => '/images/letter.png',
            ],

            // F. Meeting Minutes
            [
                'title'       => 'Meeting Minutes: Documentation That Is Often Overlooked',
                'slug'        => 'minutes-of-meeting',
                'description' => 'How to record discussion results and meeting decisions in a structured, accountable manner.',
                'content'     => '
<p class="mb-4">Meeting minutes are official notes that record the course of a meeting, including decisions made and tasks assigned.</p>

<p class="mb-4">Meeting minutes are not merely summaries. They are accountability documents that ensure every meeting decision can be tracked and justified.</p>

<h3 class="text-xl font-bold mt-6 mb-3">Required Information in Meeting Minutes</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
    <li>Meeting name and date of implementation</li>
    <li>Meeting place and time</li>
    <li>List of attendees present</li>
    <li>Meeting agenda</li>
    <li>Discussion for each agenda item</li>
    <li>Decisions made</li>
    <li>Task assignments and deadlines</li>
    <li>Meeting closing time</li>
    <li>Signatures of the note-taker and meeting chair</li>
</ul>

<h3 class="text-xl font-bold mt-6 mb-3">Common Mistakes in Preparing Meeting Minutes</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
    <li>Recording every word without filtering the main points of the discussion</li>
    <li>Failing to state who is responsible for each task</li>
    <li>Distributing the meeting minutes too late after the meeting</li>
</ul>

<h3 class="text-xl font-bold mt-8 mb-4">Practical Example</h3>
<div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4 text-sm leading-relaxed text-gray-800">
    <p class="text-center font-bold text-base mb-4 tracking-widest uppercase">Meeting Minutes</p>
    <div class="grid grid-cols-[auto,1fr] gap-x-4 gap-y-1 mb-4">
        <span class="font-semibold">Meeting Name</span><span>: Q1 2026 Quarterly Evaluation Meeting</span>
        <span class="font-semibold">Date</span><span>: May 16, 2026</span>
        <span class="font-semibold">Venue</span><span>: Second-Floor Meeting Room</span>
        <span class="font-semibold">Time</span><span>: 09.00 &ndash; 11.00 WIB</span>
        <span class="font-semibold">Chair</span><span>: Budi Santoso (Operations Manager)</span>
        <span class="font-semibold">Note-taker</span><span>: Sari Indah</span>
        <span class="font-semibold">Participants</span><span>: Budi Santoso, Dina Rahayu, Fahmi Kurniawan, Rina Lestari</span>
    </div>
    <p class="font-semibold mb-2">Agenda &amp; Discussion</p>
    <ol class="list-decimal pl-5 space-y-3 mb-4">
        <li>
            <strong>Evaluation of Q1 2026 sales targets</strong>
            <ul class="list-disc pl-5 mt-1 space-y-1">
                <li>Q1 target: Rp 500 million</li>
                <li>Realization: Rp 430 million (86% achieved)</li>
                <li>Main cause: supplier delivery delays</li>
            </ul>
        </li>
        <li>
            <strong>Q2 2026 Improvement Plan</strong>
            <ul class="list-disc pl-5 mt-1 space-y-1">
                <li>Supplier diversification begins in June 2026 <em>(PIC: Fahmi Kurniawan)</em></li>
                <li>Review of existing supplier contract before May 30, 2026 <em>(PIC: Dina Rahayu)</em></li>
            </ul>
        </li>
    </ol>
    <p class="italic text-gray-600 text-xs">Meeting closed at 11.00 WIB &bull; Note-taker: Sari Indah &bull; Approved by: Budi Santoso</p>
</div>
',
                'image_url'   => '/images/meeting.png',
            ],

            // G. Data in Business Communication
            [
                'title'       => 'The Importance of Data in Business Communication',
                'slug'        => 'importance-of-data',
                'description' => 'Why data is crucial in supporting business arguments, decisions, and credibility at every organizational level.',
                'content'     => '
<p class="mb-4">Data does not belong only to research or finance divisions. Data is a powerful communication tool at every level of an organization.</p>

<p class="mb-4">Business messages supported by data are easier to trust. Data replaces opinion with facts, and facts reduce the potential for misunderstanding or unnecessary debate.</p>

<h3 class="text-xl font-bold mt-6 mb-3">The Role of Data in Business Communication</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
    <li><strong>Supporting arguments:</strong> a sales report showing a 15% decline is stronger than saying "sales are unsatisfactory"</li>
    <li><strong>Supporting decision-making:</strong> market trend data helps management choose the right strategy</li>
    <li><strong>Increasing credibility:</strong> messages that include valid data sources feel more professional</li>
    <li><strong>Reducing ambiguity:</strong> numbers and charts clarify meanings that are difficult to explain in words</li>
    <li><strong>Supporting business reports:</strong> annual reports, performance reports, and client presentations all depend on accurate data</li>
</ul>

<h3 class="text-xl font-bold mt-6 mb-3">Simple Example</h3>
<p class="mb-4">Instead of writing <em>"Our team worked hard this year,"</em> write:</p>
<blockquote class="border-l-4 border-blue-500 pl-4 italic mb-4 text-gray-700">
    "Our team successfully completed 47 client projects throughout 2025, an increase of 20% compared with the previous year."
</blockquote>
<p class="mb-4">The second sentence is far more informative and persuasive.</p>

<h3 class="text-xl font-bold mt-8 mb-4">Practical Example</h3>
<div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4 text-sm leading-relaxed text-gray-800">
    <p class="mb-3">In a presentation to management, instead of saying:</p>
    <blockquote class="border-l-4 border-red-300 pl-4 italic text-gray-500 mb-3">&ldquo;Our social media is quite active.&rdquo;</blockquote>
    <p class="mb-3">A good communication staff member would say:</p>
    <blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-800 mb-3">&ldquo;The company&apos;s Instagram account recorded follower growth of <strong>32%</strong> over the last three months, with an average engagement rate of <strong>4.7% per post</strong>. This figure exceeds the industry average, which is around 2&ndash;3%.&rdquo;</blockquote>
    <p class="text-gray-600">This data immediately shows real achievement and helps management make the next communication budget decision.</p>
</div>
',
                'image_url'   => '/images/data.png',
            ],
        ];

        foreach ($posts as $post) {
            Post::updateOrCreate(
                ['slug' => $post['slug']],
                $post
            );
        }
    }
}
