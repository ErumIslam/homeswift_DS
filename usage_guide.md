# HomeSwift Design System - Usage Guide

## Introduction

This guide provides detailed instructions for designers and developers on how to effectively use the HomeSwift Design System. Following these guidelines will ensure consistency, accessibility, and efficiency across all HomeSwift products.

## Table of Contents

1. [For Designers](#for-designers)
   - [Getting Started with Figma](#getting-started-with-figma)
   - [Using Design Tokens](#using-design-tokens)
   - [Working with Components](#working-with-components)
   - [Creating New Designs](#creating-new-designs)
   - [Design Review Process](#design-review-process)

2. [For Developers](#for-developers)
   - [Implementation Overview](#implementation-overview)
   - [Web Implementation](#web-implementation)
   - [iOS Implementation](#ios-implementation)
   - [Android Implementation](#android-implementation)
   - [Testing and Quality Assurance](#testing-and-quality-assurance)

3. [Collaboration Best Practices](#collaboration-best-practices)
   - [Designer-Developer Handoff](#designer-developer-handoff)
   - [Feedback and Iteration](#feedback-and-iteration)
   - [Contributing to the Design System](#contributing-to-the-design-system)

4. [Accessibility Guidelines](#accessibility-guidelines)
   - [Design for Accessibility](#design-for-accessibility)
   - [Development for Accessibility](#development-for-accessibility)
   - [Testing for Accessibility](#testing-for-accessibility)

5. [Version Control and Updates](#version-control-and-updates)
   - [Versioning Strategy](#versioning-strategy)
   - [Deprecation Policy](#deprecation-policy)
   - [Staying Updated](#staying-updated)

## For Designers

### Getting Started with Figma

1. **Access the Figma Library**
   - Request access to the HomeSwift Design System Figma library from the design team
   - Once granted access, the library will appear in your Figma account under "Shared Libraries"

2. **Library Structure**
   - The Figma library is organized into the following pages:
     - Introduction: Overview and documentation
     - Design Tokens: Colors, typography, spacing, shadows, and border styles
     - Components: UI components organized by type
     - Patterns: Common UI patterns and layouts
     - Templates: Page templates for common screens
     - Examples: Example screens showing the design system in use

3. **Using Components from the Library**
   - To use components from the library, click on the "Assets" panel in Figma
   - Filter by the HomeSwift Design System library
   - Drag and drop components onto your design canvas
   - Components will maintain their connection to the library, allowing for updates

### Using Design Tokens

1. **Color Tokens**
   - Access color styles from the Figma "Color Styles" panel
   - Use the established color naming convention: [Category]/[Name]
   - Never use raw hex values; always use color tokens
   - For new designs, stick to the defined color palette

2. **Typography Tokens**
   - Access text styles from the Figma "Text Styles" panel
   - Use the established typography naming convention: [Category]/[Size]/[Weight]
   - Always use text styles for consistency
   - Maintain the type hierarchy as defined in the design system

3. **Spacing Tokens**
   - Use the spacing scale for all layout decisions
   - The base unit is 4px, with the scale following multiples of 4
   - Use auto layout with proper spacing tokens for consistent spacing

4. **Effect Tokens**
   - Use shadow styles from the Figma "Effect Styles" panel
   - Follow the established naming convention: [Category]/[Name]
   - Use consistent shadows for elevation hierarchy

### Working with Components

1. **Component Variants**
   - Components have variants for different states and configurations
   - Access variants through the properties panel when a component is selected
   - Use the appropriate variant for each context

2. **Component Customization**
   - Avoid detaching components from the library
   - Use component properties to customize when available
   - If a component needs significant modification, consider proposing a new variant

3. **Component Composition**
   - Build complex interfaces by combining simpler components
   - Use auto layout for proper spacing and alignment
   - Maintain proper hierarchy and visual relationships

### Creating New Designs

1. **Starting a New Design**
   - Begin with the appropriate template from the Templates page
   - Use established patterns for common user flows
   - Ensure all designs follow the grid system (8px grid)

2. **Design Principles**
   - Follow the HomeSwift design principles:
     - User-Centered: Focus on user needs and goals
     - Consistent: Maintain consistency across the platform
     - Inclusive: Design for all users
     - Efficient: Optimize for performance and usability
     - Clear: Communicate clearly and directly
     - Scalable: Design for growth and evolution

3. **Responsive Design**
   - Design for all supported screen sizes
   - Use responsive components that adapt to different viewports
   - Test designs at key breakpoints (mobile, tablet, desktop)

### Design Review Process

1. **Preparation for Review**
   - Ensure all designs use components from the design system
   - Check for accessibility compliance (color contrast, text size, etc.)
   - Prepare user flow documentation if applicable

2. **Review Checklist**
   - Consistency with design system
   - Accessibility compliance
   - Responsive behavior
   - User flow logic
   - Edge cases and error states

3. **Iteration Process**
   - Address feedback from reviews
   - Document design decisions and rationale
   - Update designs based on user testing results

## For Developers

### Implementation Overview

1. **Technology Stack**
   - Web: HTML, CSS, JavaScript
   - iOS: Swift, UIKit/SwiftUI
   - Android: Kotlin, Jetpack Compose
   - Cross-platform considerations

2. **Development Principles**
   - Component-based architecture
   - Accessibility-first approach
   - Performance optimization
   - Progressive enhancement
   - Responsive design

3. **Development Environment Setup**
   - Access to code repositories
   - Required dependencies and tools
   - Local development configuration

### Web Implementation

1. **CSS Architecture**
   - CSS variables for design tokens
   - Component-based CSS organization
   - Responsive breakpoints
   - Browser support requirements

2. **HTML Structure**
   - Semantic HTML elements
   - Proper ARIA attributes
   - Accessibility considerations

3. **JavaScript Behavior**
   - Vanilla JavaScript for core functionality
   - Progressive enhancement
   - Performance considerations
   - Accessibility requirements

4. **Example Implementation**
   ```html
   <!-- Button Component -->
   <button class="btn btn-primary" type="button">
     Primary Button
   </button>

   <!-- Card Component -->
   <div class="card service-card">
     <div class="service-card-icon" aria-hidden="true">🧹</div>
     <h3 class="service-card-title">Cleaning</h3>
     <p class="service-card-price">Starting at $25/hr</p>
     <button class="btn btn-primary">View</button>
   </div>
   ```

   ```css
   /* Button Component CSS */
   .btn {
     display: inline-flex;
     align-items: center;
     justify-content: center;
     border-radius: var(--radius-medium);
     padding: var(--spacing-3) var(--spacing-6);
     font-weight: 600;
     font-size: 16px;
     transition: all 0.2s ease;
     cursor: pointer;
     border: none;
     min-width: 120px;
   }

   .btn-primary {
     background-color: var(--color-plum-purple);
     color: var(--color-white);
   }

   .btn-primary:hover {
     background-color: #4b0077;
   }

   .btn-primary:active {
     background-color: #2d0046;
   }

   .btn-primary:focus {
     outline: 2px solid var(--color-green-lime);
     outline-offset: 2px;
   }
   ```

### iOS Implementation

1. **Design Tokens**
   - Color definitions
   - Typography setup
   - Spacing and layout constants

2. **Component Implementation**
   - UIKit components
   - SwiftUI components
   - Custom components

3. **Example Implementation**
   ```swift
   // Colors.swift
   import UIKit

   extension UIColor {
       struct HomeSwift {
           static let plumPurple = UIColor(red: 57/255, green: 0/255, blue: 92/255, alpha: 1.0)
           static let midnightBlue = UIColor(red: 0/255, green: 48/255, blue: 92/255, alpha: 1.0)
           static let white = UIColor.white
           static let greenLime = UIColor(red: 55/255, green: 198/255, blue: 64/255, alpha: 1.0)
           static let gray = UIColor.systemGray
       }
   }

   // HSButton.swift
   import UIKit

   class HSButton: UIButton {
       enum Style {
           case primary
           case secondary
           case disabled
       }
       
       private var style: Style = .primary
       
       init(style: Style) {
           super.init(frame: .zero)
           self.style = style
           setupButton()
       }
       
       required init?(coder: NSCoder) {
           super.init(coder: coder)
           setupButton()
       }
       
       private func setupButton() {
           layer.cornerRadius = 8
           titleLabel?.font = UIFont(name: "Poppins-SemiBold", size: 16)
           
           switch style {
           case .primary:
               backgroundColor = UIColor.HomeSwift.plumPurple
               setTitleColor(UIColor.HomeSwift.white, for: .normal)
           case .secondary:
               backgroundColor = UIColor.clear
               setTitleColor(UIColor.HomeSwift.midnightBlue, for: .normal)
               layer.borderWidth = 2
               layer.borderColor = UIColor.HomeSwift.midnightBlue.cgColor
           case .disabled:
               backgroundColor = UIColor.HomeSwift.gray
               setTitleColor(UIColor.HomeSwift.white, for: .normal)
               isEnabled = false
               alpha = 0.7
           }
           
           contentEdgeInsets = UIEdgeInsets(top: 12, left: 24, bottom: 12, right: 24)
       }
   }
   ```

### Android Implementation

1. **Design Tokens**
   - Color definitions
   - Typography setup
   - Spacing and layout constants

2. **Component Implementation**
   - Material components
   - Jetpack Compose components
   - Custom components

3. **Example Implementation**
   ```kotlin
   // HomeSwiftTheme.kt
   import androidx.compose.ui.graphics.Color

   object HomeSwiftColors {
       val PlumPurple = Color(0xFF39005C)
       val MidnightBlue = Color(0xFF00305C)
       val White = Color(0xFFFFFFFF)
       val GreenLime = Color(0xFF37C640)
       val Gray = Color(0xFF808080)
   }

   // Button.kt
   import androidx.compose.foundation.layout.PaddingValues
   import androidx.compose.foundation.layout.height
   import androidx.compose.foundation.layout.width
   import androidx.compose.material.Button
   import androidx.compose.material.ButtonDefaults
   import androidx.compose.material.Text
   import androidx.compose.runtime.Composable
   import androidx.compose.ui.Modifier
   import androidx.compose.ui.unit.dp

   enum class ButtonStyle {
       PRIMARY,
       SECONDARY,
       DISABLED
   }

   @Composable
   fun HomeSwiftButton(
       text: String,
       style: ButtonStyle = ButtonStyle.PRIMARY,
       onClick: () -> Unit = {}
   ) {
       val colors = when (style) {
           ButtonStyle.PRIMARY -> ButtonDefaults.buttonColors(
               backgroundColor = HomeSwiftColors.PlumPurple,
               contentColor = HomeSwiftColors.White
           )
           ButtonStyle.SECONDARY -> ButtonDefaults.buttonColors(
               backgroundColor = HomeSwiftColors.White,
               contentColor = HomeSwiftColors.MidnightBlue
           )
           ButtonStyle.DISABLED -> ButtonDefaults.buttonColors(
               backgroundColor = HomeSwiftColors.Gray,
               contentColor = HomeSwiftColors.White
           )
       }
       
       val isEnabled = style != ButtonStyle.DISABLED
       
       Button(
           onClick = onClick,
           enabled = isEnabled,
           colors = colors,
           contentPadding = PaddingValues(horizontal = 24.dp, vertical = 12.dp),
           modifier = Modifier
               .height(48.dp)
               .width(120.dp)
       ) {
           Text(text = text)
       }
   }
   ```

### Testing and Quality Assurance

1. **Functional Testing**
   - Component behavior testing
   - Interaction testing
   - Edge case testing

2. **Visual Testing**
   - Visual regression testing
   - Cross-browser/device testing
   - Dark mode testing

3. **Accessibility Testing**
   - Screen reader testing
   - Keyboard navigation testing
   - Color contrast testing
   - Focus management testing

4. **Performance Testing**
   - Load time testing
   - Animation performance
   - Memory usage
   - Battery impact (mobile)

## Collaboration Best Practices

### Designer-Developer Handoff

1. **Handoff Documentation**
   - Component specifications
   - Interaction details
   - Edge cases and states
   - Responsive behavior

2. **Design Specs**
   - Measurements and spacing
   - Color values
   - Typography details
   - Asset exports

3. **Communication Channels**
   - Regular sync meetings
   - Shared documentation
   - Feedback mechanisms

### Feedback and Iteration

1. **Feedback Process**
   - Structured feedback format
   - Clear prioritization
   - Timeline for addressing feedback

2. **Iteration Cycles**
   - Regular review points
   - Version tracking
   - Documentation of changes

3. **User Testing Integration**
   - Incorporating user feedback
   - A/B testing results
   - Usability study findings

### Contributing to the Design System

1. **Contribution Process**
   - Identifying gaps or needs
   - Proposing new components or patterns
   - Documentation requirements

2. **Review Process**
   - Design review
   - Code review
   - Accessibility review
   - Performance review

3. **Integration Process**
   - Version management
   - Release notes
   - Documentation updates

## Accessibility Guidelines

### Design for Accessibility

1. **Color and Contrast**
   - Minimum contrast ratios (4.5:1 for normal text, 3:1 for large text)
   - Color not used as the only means of conveying information
   - Sufficient contrast for interactive elements

2. **Typography and Readability**
   - Minimum text sizes (16px for body text)
   - Line height and spacing for readability
   - Text alignment (left-aligned for LTR languages)

3. **Layout and Structure**
   - Clear visual hierarchy
   - Sufficient spacing between elements
   - Consistent navigation and structure

### Development for Accessibility

1. **Semantic HTML**
   - Proper heading structure
   - Semantic elements (nav, main, section, etc.)
   - Meaningful link text

2. **ARIA Implementation**
   - ARIA landmarks
   - ARIA attributes for custom components
   - ARIA live regions for dynamic content

3. **Keyboard Navigation**
   - Logical tab order
   - Visible focus indicators
   - Keyboard shortcuts where appropriate

### Testing for Accessibility

1. **Automated Testing**
   - Accessibility linting tools
   - Automated accessibility tests
   - CI/CD integration

2. **Manual Testing**
   - Screen reader testing
   - Keyboard-only navigation testing
   - Zoom and magnification testing

3. **User Testing**
   - Testing with users with disabilities
   - Gathering feedback on accessibility
   - Continuous improvement

## Version Control and Updates

### Versioning Strategy

1. **Semantic Versioning**
   - Major version: Breaking changes
   - Minor version: New features, no breaking changes
   - Patch version: Bug fixes, no breaking changes

2. **Version Documentation**
   - Detailed release notes
   - Migration guides for breaking changes
   - Deprecation notices

3. **Version Compatibility**
   - Browser/device support matrix
   - Backward compatibility considerations
   - Polyfills and fallbacks

### Deprecation Policy

1. **Deprecation Process**
   - Advance notice (minimum 2 versions)
   - Clear documentation of alternatives
   - Support during transition period

2. **Migration Support**
   - Migration guides
   - Code examples
   - Support channels

3. **Legacy Support**
   - Timeline for legacy support
   - Critical bug fixes only
   - End-of-life announcements

### Staying Updated

1. **Communication Channels**
   - Release announcements
   - Change logs
   - Design system newsletter

2. **Update Process**
   - Regular update schedule
   - Update dependencies
   - Testing after updates

3. **Feedback Channels**
   - Issue reporting
   - Feature requests
   - User feedback collection

## Conclusion

The HomeSwift Design System is a living document that will evolve over time. By following these guidelines, designers and developers can create consistent, accessible, and high-quality experiences for HomeSwift users. Regular communication, collaboration, and feedback are essential to the continued success and evolution of the design system.

For additional support or questions, contact the design system team at designsystem@homeswift.com or join the #design-system channel on Slack.

---

*Last updated: May 20, 2025*
