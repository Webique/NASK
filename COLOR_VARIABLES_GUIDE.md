# NASK Color Variables & RTL Support Guide

## Brand Colors Added to globals.css

```css
:root {
  /* NASK Brand Colors */
  --brand-orange: #EFA138;
  --brand-red: #D5424F;
  --brand-purple: #932968;
  --brand-gray: #404041;

  /* Applied to theme */
  --primary: var(--brand-orange);
  --secondary: var(--brand-red);
}
```

## Global Find & Replace Needed

### 1. Replace Hardcoded Colors with CSS Variables

| Find | Replace With |
|------|--------------|
| `bg-[#EFA138]` | `bg-primary` |
| `text-[#EFA138]` | `text-primary` |
| `border-[#EFA138]` | `border-primary` |
| `from-[#EFA138]` | `from-primary` |
| `to-[#EFA138]` | `to-primary` |
| `bg-[#D5424F]` | `bg-secondary` |
| `text-[#D5424F]` | `text-secondary` |
| `border-[#D5424F]` | `border-secondary` |
| `from-[#D5424F]` | `from-secondary` |
| `to-[#D5424F]` | `to-secondary` |
| `ring-[#EFA138]` | `ring-primary` |
| `shadow-[#EFA138]` | `shadow-primary` |
| `bg-[#E08A1E]` | `bg-accent` |
| `to-[#E08A1E]` | `to-accent` |

### 2. Fix Gradient Classes

| Find | Replace With |
|------|--------------|
| `bg-gradient-to-r` | `bg-linear-to-r` |
| `bg-gradient-to-l` | `bg-linear-to-l` |
| `bg-gradient-to-t` | `bg-linear-to-t` |
| `bg-gradient-to-b` | `bg-linear-to-b` |
| `bg-gradient-to-tr` | `bg-linear-to-tr` |
| `bg-gradient-to-tl` | `bg-linear-to-tl` |
| `bg-gradient-to-br` | `bg-linear-to-br` |
| `bg-gradient-to-bl` | `bg-linear-to-bl` |

### 3. RTL Support - Replace Directional Classes

| Find | Replace With | Reason |
|------|--------------|--------|
| `left-` | `start-` | RTL support |
| `right-` | `end-` | RTL support |
| `-left` | `-start` | RTL support |
| `-right` | `-end` | RTL support |
| `text-left` | `text-start` | RTL support |
| `text-right` | `text-end` | RTL support |
| `justify-start` | Keep as is | Already RTL-aware |
| `justify-end` | Keep as is | Already RTL-aware |

**Note:** Be careful with:
- `translate-x-1/2` (keep as is)
- `space-x-` (keep as is, Tailwind handles RTL)
- `gap-` (keep as is, already RTL-aware)

### 4. Footer - Use Darker Background

In `footer.tsx`, change:
```tsx
// FROM:
className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"

// TO:
className="relative overflow-hidden bg-linear-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#1a1a1a]"
```

## Files Already Updated

✅ `src/app/globals.css` - Brand colors added
✅ `src/components/landing/hero.tsx` - All fixes applied
✅ `src/components/landing/mission.tsx` - All fixes applied
✅ `src/components/landing/values.tsx` - All fixes applied
✅ `src/components/landing/footer.tsx` - All fixes applied (darker background)
✅ `src/components/landing/about.tsx` - All fixes applied
✅ `src/components/layout/header.tsx` - CTA buttons updated

## Files Still Need Updates

⚠️ `src/components/landing/validation.tsx`
⚠️ `src/components/landing/certifications.tsx`
⚠️ `src/components/landing/features.tsx`
⚠️ `src/components/landing/cta.tsx`
⚠️ `src/components/landing/contact.tsx`

## Quick Fix Commands

You can use VS Code's Find & Replace (Cmd/Ctrl + Shift + H) with these patterns:

1. **Find:** `bg-\[#EFA138\]` **Replace:** `bg-primary`
2. **Find:** `text-\[#EFA138\]` **Replace:** `text-primary`
3. **Find:** `bg-\[#D5424F\]` **Replace:** `bg-secondary`
4. **Find:** `text-\[#D5424F\]` **Replace:** `text-secondary`
5. **Find:** `bg-gradient-to-` **Replace:** `bg-linear-to-`
6. **Find:** `\bleft-` **Replace:** `start-` (use regex mode)
7. **Find:** `\bright-` **Replace:** `end-` (use regex mode)
8. **Find:** `-left\b` **Replace:** `-start` (use regex mode)
9. **Find:** `-right\b` **Replace:** `-end` (use regex mode)

## Testing

After updates, test:
1. ✅ All brand colors display correctly
2. ✅ Gradients work properly
3. ✅ RTL mode (Arabic) displays correctly
4. ✅ Footer is darker than other sections
5. ✅ No hardcoded color values remain

## Additional Brand Colors Available

If you need the other brand colors:
- Purple: `var(--brand-purple)` or `#932968`
- Gray: `var(--brand-gray)` or `#404041`

Add them to your components as needed!
