# 🚀 Quick Reference - Hive Studio AI Chat

**For Future Claude Code Sessions**

---

## 📋 Current Working Configuration

### n8n Setup
- **Workflow Name**: HiveStudioAI
- **URL**: https://i10aaron.app.n8n.cloud/
- **Webhook ID**: `0df49951-9ed4-4765-807d-5d7b384748ae`
- **Status**: ✅ Active and processing messages
- **Bot Persona**: AAIRON (Hive Studio AI assistant)

### Production Webhook
```
https://i10aaron.app.n8n.cloud/webhook/0df49951-9ed4-4765-807d-5d7b384748ae
```

### Website Integration
- **Live Site**: https://hivestudio.ai
- **Chat Widget**: Bottom-right bee icon
- **File**: `/frontend/src/components/AIChatWidget.js`
- **Status**: ✅ Fully operational with enhanced size

---

## 🎯 Proven Working Process

### To Deploy Chat Updates:
1. Edit `/frontend/src/components/AIChatWidget.js`
2. Test locally: `npm run build`
3. Commit: `git add -A && git commit -m "Description"`
4. Deploy: `git push origin main`
5. Wait 2-3 minutes for Vercel
6. Test at https://hivestudio.ai

### To Test Integration:
1. Visit https://hivestudio.ai
2. Click bee icon (bottom-right)
3. Send message
4. Check n8n executions for success

---

## 🔧 Key Technical Details

### Payload Format (DO NOT CHANGE)
```javascript
{
  payload: "user message",
  userID: "unique_id", 
  userFullName: "Website Visitor",
  userEmail: "",
  userPhone: "",
  sessionId: "session_id",
  timestamp: "ISO_string"
}
```

### Response Format from n8n
```javascript
{
  "Message_1": "First part",
  "Message_2": "Second part (optional)",
  "chat_history": "[]"
}
```

### Chat Window Specs
- **Desktop**: 384px × 512px
- **Mobile**: Responsive × 75vh
- **Position**: Fixed bottom-right

---

## ⚠️ Critical Notes

1. **MUST use HiveStudioAI workflow** (not 1prompt v1.7 copy)
2. **Remove `-test` from webhook URL** for production
3. **n8n must be Active** (green toggle)
4. **Test webhook before deploying** changes
5. **Check n8n executions** to verify success

---

## 📁 Key Files

### Essential Files to Know
- `/frontend/src/components/AIChatWidget.js` - Main integration
- `/CHAT_INTEGRATION_GUIDE.md` - Complete documentation  
- `/PRODUCTION_DEPLOYMENT_CHECKLIST.md` - Step-by-step process
- `/Downloads/HiveStudioAI.json` - n8n workflow reference

### Last Known Good State
- **Commit**: Latest with enhanced chat window
- **n8n Status**: Active with successful executions
- **Webhook**: Production URL working
- **Integration**: Full AI responses confirmed

---

*This reference ensures future sessions can quickly understand and work with the established system.*