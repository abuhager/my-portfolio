"""Regenerate public/resume.pdf with embedded fonts and selectable text.

Run: python -m pip install reportlab && python scripts/build-resume.py
Content mirrors the published resume; no character-spacing overrides are used.
"""
from pathlib import Path
import reportlab
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer

ROOT = Path(__file__).resolve().parents[1]
INK = colors.HexColor('#18201d')
font_dir = Path(reportlab.__file__).parent / 'fonts'
pdfmetrics.registerFont(TTFont('ResumeSans', str(font_dir / 'Vera.ttf')))
pdfmetrics.registerFont(TTFont('ResumeSans-Bold', str(font_dir / 'VeraBd.ttf')))
pdfmetrics.registerFontFamily('ResumeSans', normal='ResumeSans', bold='ResumeSans-Bold', italic='ResumeSans', boldItalic='ResumeSans-Bold')
styles = {
    'body': ParagraphStyle('Body', fontName='Helvetica', fontSize=9.2, leading=12.6, textColor=INK, spaceAfter=3),
    'name': ParagraphStyle('Name', fontName='Helvetica-Bold', fontSize=22, leading=26, alignment=TA_CENTER, spaceAfter=4),
    'role': ParagraphStyle('Role', fontName='Helvetica-Bold', fontSize=11, leading=15, alignment=TA_CENTER, spaceAfter=5),
    'contact': ParagraphStyle('Contact', fontName='Helvetica', fontSize=8.3, leading=12, alignment=TA_CENTER, spaceAfter=3),
    'section': ParagraphStyle('Section', fontName='Helvetica-Bold', fontSize=10, leading=13, spaceBefore=9, spaceAfter=4, textColor=INK),
    'title': ParagraphStyle('Title', fontName='Helvetica-Bold', fontSize=9.7, leading=13, spaceBefore=5, spaceAfter=3, keepWithNext=True),
    'stack': ParagraphStyle('Stack', fontName='Helvetica', fontSize=8.7, leading=12, textColor=colors.HexColor('#47534c'), spaceAfter=3),
    'bullet': ParagraphStyle('Bullet', fontName='Helvetica', fontSize=9.2, leading=12.6, leftIndent=8, firstLineIndent=-8, spaceAfter=2),
}
for style in styles.values():
    style.fontName = 'ResumeSans-Bold' if style.fontName.endswith('Bold') else 'ResumeSans'
for name in ('body', 'bullet'):
    styles[name].fontSize = 8.6
    styles[name].leading = 11.4
    styles[name].spaceAfter = 2
styles['section'].spaceBefore = 7
styles['section'].spaceAfter = 3
styles['title'].fontSize = 9.2
styles['title'].spaceBefore = 4
styles['stack'].fontSize = 8.3
styles['stack'].leading = 11
styles['contact'].fontSize = 7.7

story = []

def p(text, style='body'):
    story.append(Paragraph(text, styles[style]))

def link(label, url):
    return f'<a href="{url}" color="#18558d"><u>{label}</u></a>'

def section(title):
    p(title, 'section')
    story.append(HRFlowable(width='100%', thickness=.45, color=colors.HexColor('#c5cec8'), spaceAfter=5))

p('Adham Abu Hager', 'name')
p('Junior Full-Stack Developer', 'role')
p('Amman, Jordan | ' + link('abuhager360@gmail.com', 'mailto:abuhager360@gmail.com') + ' | +962 7 9728 3384', 'contact')
p('Portfolio: ' + link('adhamabuhagerdev.site', 'https://adhamabuhagerdev.site') + ' | GitHub: ' + link('github.com/abuhager', 'https://github.com/abuhager') + ' | LinkedIn: ' + link('linkedin.com/in/adham-abuhager', 'https://www.linkedin.com/in/adham-abuhager/'), 'contact')

section('PROFESSIONAL SUMMARY')
p('Computer Science graduate seeking junior full-stack roles, with project experience in Next.js, Node.js/Express, ASP.NET Core, C#, MongoDB and SQL Server. Created and deployed Aoun, a live Arabic donation platform. Skilled in translating requirements into workflows, AI-assisted development, functional testing, debugging and managing deployments.')

section('TECHNICAL SKILLS')
p('<b>Languages &amp; fundamentals:</b> C#, JavaScript, TypeScript (project use), SQL, OOP, HTML, CSS')
p('<b>Frontend &amp; backend:</b> React, Next.js, Angular (HelpDesk), Node.js, Express.js, ASP.NET Core MVC / Web API, REST APIs, Socket.IO')
p('<b>Databases &amp; tools:</b> MongoDB, SQL Server, Entity Framework Core, Git/GitHub, Postman, Playwright, GitHub Actions CI, Vercel, Render')

section('PROJECTS')
p('Aoun | Arabic In-Kind Donation Platform (Live)', 'title')
p('Next.js, TypeScript, Node.js, Express.js, MongoDB, Socket.IO', 'stack')
p('- Created a live platform for donation listings, need requests, bookings, FIFO waitlists and handover confirmation.', 'bullet')
p('- Designed donor, recipient and admin workflows for access roles, ratings, reports, appeals and support.', 'bullet')
p('- Iteratively developed real-time chat, JWT/OTP authentication and reservation safeguards; tested end-to-end flows and deployed through Vercel and Render.', 'bullet')
p('Live: ' + link('aoun.website', 'https://www.aoun.website/') + ' | Frontend: ' + link('github.com/abuhager/Aoun-Project_FrontEnd', 'https://github.com/abuhager/Aoun-Project_FrontEnd'))
p('Backend: ' + link('github.com/abuhager/Aoun-Project_BackEnd', 'https://github.com/abuhager/Aoun-Project_BackEnd'))

p('UniEvents | University Event Management &amp; Booking', 'title')
p('Graduation project | ASP.NET Core MVC, C#, Entity Framework Core, SQL Server', 'stack')
p('- Built student/admin event booking with capacity controls, FIFO waitlist promotion, attendance tracking, PDF tickets and Excel exports.', 'bullet')
p('GitHub: ' + link('github.com/abuhager/privateevent', 'https://github.com/abuhager/privateevent'))

p('HelpDesk SaaS | IT Service Management', 'title')
p('ASP.NET Core, C#, Entity Framework Core, SQL Server, Angular', 'stack')
p('- Created a multi-company HelpDesk demo with roles, ticket assignment, audit history, SLA tracking and bilingual interfaces.', 'bullet')
p('Walkthrough: ' + link('adhamabuhagerdev.site/projects/helpdesk', 'https://adhamabuhagerdev.site/projects/helpdesk') + '<br/>App (sign-in required): ' + link('helpdesk-abuhager.onrender.com', 'https://helpdesk-abuhager.onrender.com'))

p('Khutwa | Arabic Learning Platform', 'title')
p('Next.js, ASP.NET Core, MongoDB', 'stack')
p('- Created an Arabic learning prototype with quizzes, progress tracking, administrative tools and offline practice.', 'bullet')
p('Demo: ' + link('khutwa-nine.vercel.app/demo', 'https://khutwa-nine.vercel.app/demo'))

section('EXPERIENCE')
p('<b>.NET Development Trainee | Quark Software | Oct 2025 - Jan 2026</b>')
p('Practiced C# and .NET fundamentals, object-oriented programming and problem-solving through console applications.')

section('TRAINING &amp; CERTIFICATIONS')
p('<b>Full-Stack Development (MERN) | DOT Jordan / Youth Grow Activity (YGA) | 2026</b>')
p("130 hours of MERN training; completed YGA's six-month Digital Employability Program covering technical training, mentoring and coaching. Certificate of Completion awarded.")
p('<b>Programming &amp; Database Foundations | Programming Advices | 12 structured courses</b>')

section('EDUCATION')
p('<b>B.Sc. in Computer Science</b> | Al-Zaytoonah University of Jordan | 2022 - 2026')

SimpleDocTemplate(str(ROOT / 'public/resume.pdf'), pagesize=A4, topMargin=30, bottomMargin=28, leftMargin=36, rightMargin=36, title='Adham Abu Hager - Junior Full-Stack Developer', author='Adham Abu Hager').build(story)
